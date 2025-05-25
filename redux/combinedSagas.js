import { assessmentData } from "./sagas/assessment"; 
import {all} from "redux-saga/effects";


export default function *sagas(): any {
    yield all([
        assessmentData(),
      ]);    
}
