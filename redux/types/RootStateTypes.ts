import { DebitCardModuleType } from "../../screens/DebitCardModule/TypeConstants";
import { TAssessmentData } from "../reducers/debitCardModuleReducer";

export interface RootStateTypes {
    debitCardModule: DebitCardModuleType;
}

export interface TAction {
    type: string;
    payload: any;
}

