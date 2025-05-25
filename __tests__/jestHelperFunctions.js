import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/combinedReducers";
import combinedSagas from "../redux/combinedSagas";
import { Provider } from "react-redux";

export const configureMockStore = (initialState = {}) => {
  let store = {};

  const sagaMiddleware = createSagaMiddleware();

  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(combinedSagas);

  return store;
};

export const renderComponents = (component, initialState) => {
  return render(
    <Provider store={configureMockStore(initialState)}>
      <NavigationContainer>{component}</NavigationContainer>
    </Provider>
  );
};

export const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  replace: jest.fn(),
  popToTop: jest.fn(),
};
