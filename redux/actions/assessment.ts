import { FETCH_ASSESSMENT_DATA, SET_ASSESSMENT_DATA, SET_FINAL_SCORE, RESET_ASSESSMENT_DATA, RESET_FINAL_SCORE } from "../actionType";
import { action } from "../helperFunctions";

interface TAssessmentData {
    questionId: number,
    answer: string,
    value: number,
    normalizedScore: number,
}

export const fetchAssessmentData = () => (action(FETCH_ASSESSMENT_DATA));

export const setAssessmentData = (data: TAssessmentData) => (action(SET_ASSESSMENT_DATA, data));

export const resetAssessmentData = () => (action(RESET_ASSESSMENT_DATA));

export const setFinalScore = (score: number) => (action(SET_FINAL_SCORE, score));

export const resetFinalScore = () => (action(RESET_FINAL_SCORE));

