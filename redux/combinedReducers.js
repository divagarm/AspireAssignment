import { combineReducers } from "redux";

import debitCardModuleReducer from "./reducers/debitCardModuleReducer";

const appReducer = combineReducers({
  debitCardModule: debitCardModuleReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
