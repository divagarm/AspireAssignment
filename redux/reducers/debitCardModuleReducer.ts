import { DebitCardModuleType } from "../../screens/DebitCardModule/TypeConstants";
import {
  addNewDebitCard,
  storeDebitCardData,
  updateFreezeCardData,
  updateWeeklySpendingLimitData,
} from "../actions/debitCardModuleActions";
import { getActionType } from "../helperFunctions";
import { TAction } from "../types/RootStateTypes";

const initialState = {
  debitCardData: [
    {
      id: -1,
      holderName: "---",
      cardNumber: "xxxx-xxxx-xxxx-xxxx",
      expiryDate: "MM/YY",
      cvv: "***",
      balance: 0,
      currency: "S$",
      weeklySpendLimit: { enabled: false, limit: 0 },
      freezeCard: { enabled: false },
    },
  ],
};

const debitCardModuleReducer = (
  state: DebitCardModuleType = initialState,
  action: TAction,
) => {
  switch (action.type) {
    case getActionType(storeDebitCardData): {
      const data = action.payload;
      // Create a new array to maintain immutability
      return { ...state, debitCardData: [data] };
    }

    case getActionType(addNewDebitCard): {
      const data = action.payload;
      // Create a new array to maintain immutability
      return { ...state, debitCardData: [...state.debitCardData, data] };
    }

    case getActionType(updateWeeklySpendingLimitData): {
      const { cardID, weeklySpendLimitData } = action.payload;
      console.log("action.payload", action.payload);

      const updatedDebitCardData = state.debitCardData.map((card) =>
        card.id === cardID
          ? { ...card, weeklySpendLimit: weeklySpendLimitData }
          : card,
      );
      return { ...state, debitCardData: updatedDebitCardData };
    }

    case getActionType(updateFreezeCardData): {
      const { cardID, enabled } = action.payload;

      const updatedDebitCardData = state.debitCardData.map((card) =>
        card.id === cardID
          ? { ...card, freezeCard: { enabled: enabled } }
          : card,
      );
      return { ...state, debitCardData: updatedDebitCardData };
    }

    default:
      return state;
  }
};

export default debitCardModuleReducer;
