import { TAssessmentData } from "../reducers/assessment";

export interface RootStateTypes {
    assessmentData: TAssessmentData;
}

export interface TAction {
    type: string;
    payload: any;
}

