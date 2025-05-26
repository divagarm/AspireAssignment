import { debitCardModuleSagas } from "./sagas/debitCardModuleSaga"; 
import {all} from "redux-saga/effects";


export default function *sagas(): any {
    yield all([
        debitCardModuleSagas(),
      ]);    
}
