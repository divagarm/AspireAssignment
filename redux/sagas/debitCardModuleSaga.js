import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  FETCH_DEBIT_CARD_DATA,
  STORE_DEBIT_CARD_DATA,
} from "../actions/debitCardModuleActionType";
import { fetchCreditCardDataAPI } from "../apis/debitCardModuleApis";

function* fetchDebitCardDataSaga() {
  try {
    const debitCardData = yield select(
      (state) => state.debitCardModule.debitCardData,
    );

    // this condition checks if the debitCardData is empty or has a default value
    if (debitCardData.length === 0 || debitCardData[0].id === -1) {
      const { data } = yield call(fetchCreditCardDataAPI);
      yield put({
        type: STORE_DEBIT_CARD_DATA,
        payload: data,
      });
    }
  } catch (error) {
    console.log("fetchDebitCardDataSaga failed", error);
    // yield put(setAssessmentData('hai hello assessment'));
  }
}

export function* debitCardModuleSagas() {
  yield takeLatest(FETCH_DEBIT_CARD_DATA, fetchDebitCardDataSaga);
}
