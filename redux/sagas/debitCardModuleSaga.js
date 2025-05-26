import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DEBIT_CARD_DATA } from '../actions/debitCardModuleActionType';



function* fetchDebitCardDataSaga() {
  try {
    // yield put(setAssessmentData('hai hello assessment'));
  } catch (error) {
    // yield put(setAssessmentData('hai hello assessment'));

  }
}

export function* debitCardModuleSagas() {
  yield takeLatest(FETCH_DEBIT_CARD_DATA, fetchDebitCardDataSaga);
}
