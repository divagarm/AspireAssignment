import {
  resetAssessmentData,
  resetFinalScore,
  setAssessmentData,
  setFinalScore,
} from "../actions/assessment";
import { getActionType } from "../helperFunctions";
import { TAction } from "../types/RootStateTypes";

export interface TAssessmentData {
  assessmentData: {
    [questionId: string]: {
      answer: string;
      value: number;
      normalizedScore: number;
    };
  };
  finalScore: number;
}

const initialState = {
  assessmentData: {},
  finalScore: 0,
};

const assessmentDataReducer = (state:TAssessmentData = initialState, action:TAction) => {
  switch (action.type) {
    case getActionType(setAssessmentData):
      const { questionId, answer, value, normalizedScore } = action.payload;
      // Store answer in a key-value format
      let assessmentData = state.assessmentData;
      assessmentData[questionId] = {
        answer,
        value,
        normalizedScore,
      };
      return { ...state, ...assessmentData };
    case getActionType(setFinalScore):
      return { ...state, finalScore: action.payload };
    case getActionType(resetAssessmentData):
      return { ...state, assessmentData: {} };
    case getActionType(resetFinalScore):
      return { ...state, finalScore: 0 };
    default:
      return state;
  }
};

export default assessmentDataReducer;
