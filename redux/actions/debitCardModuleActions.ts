import {
  UPDATE_WEEKLY_SPENDING_LIMIT_DATA,
  ADD_NEW_DEBIT_CARD,
  UPDATE_FREEZE_CARD_DATA,
  FETCH_DEBIT_CARD_DATA,
  STORE_DEBIT_CARD_DATA,
} from "./debitCardModuleActionType";
import { action } from "../helperFunctions";
import { DebitCardFormat } from "../../screens/DebitCardModule/TypeConstants";

export const fetchDebitCardData = () => action(FETCH_DEBIT_CARD_DATA);

export const storeDebitCardData = () => action(STORE_DEBIT_CARD_DATA);

export const addNewDebitCard = (data: DebitCardFormat) =>
  action(ADD_NEW_DEBIT_CARD, data);

export const updateWeeklySpendingLimitData = (data: {
  cardID: number;
  weeklySpendLimitData: any;
}) => action(UPDATE_WEEKLY_SPENDING_LIMIT_DATA, data);

export const updateFreezeCardData = (data: {
  cardID: number;
  enabled: boolean;
}) => action(UPDATE_FREEZE_CARD_DATA, data);
