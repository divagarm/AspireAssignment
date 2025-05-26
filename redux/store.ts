import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./combinedReducers";
import combinedSagas from "./combinedSagas";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  whitelist: ["debitCardModule"], // Only these reducers will be persisted.
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor: any = persistStore(store);

sagaMiddleware.run(combinedSagas);

export type AppDispatch = typeof store.dispatch;
