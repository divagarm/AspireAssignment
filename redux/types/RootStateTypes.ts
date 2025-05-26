import { DebitCardModuleType } from "../../screens/DebitCardModule/TypeConstants";
export interface RootStateTypes {
  debitCardModule: DebitCardModuleType;
}

export interface TAction {
  type: string;
  payload: any;
}
