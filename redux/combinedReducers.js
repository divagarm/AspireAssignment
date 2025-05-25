import { combineReducers } from "redux";

import assessmentDataReducer from "./reducers/assessment";

const appReducer = combineReducers({
  assessmentData: assessmentDataReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
