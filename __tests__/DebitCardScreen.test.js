import React from "react";
import { fireEvent } from "@testing-library/react-native";
import * as actions from "../redux/actions/debitCardModuleActions";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";
import DebitCardScreen from "../screens/DebitCardModule/DebitCardScreen/DebitCardScreen";
import { menuItems } from "../screens/DebitCardModule/Utility";

describe("DebitCardScreen Component", () => {
  const addNewDebitCard = jest.spyOn(actions, "addNewDebitCard");
  const spyUpdateWeeklySpendingLimitData = jest.spyOn(
    actions,
    "updateWeeklySpendingLimitData",
  );
  const spyUpdateFreezeCardData = jest.spyOn(actions, "updateFreezeCardData");

  it("renders correctly", () => {
    const { getByText } = renderComponents(<DebitCardScreen />);

    expect(getByText("Debit Card")).toBeTruthy();
  });

  it("renders all Menu Items", () => {
    const { getByText } = renderComponents(<DebitCardScreen />);

    menuItems.forEach((menuItem, index) => {
      expect(getByText(menuItem.title)).toBeTruthy();
      expect(getByText(menuItem.subtitle)).toBeTruthy();
    });
  });

  it("handles weeklySpendLimit toggleSwitch", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 2 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const switchButton = getByTestId(`toggleSwitch-weeklySpendLimit`);

    fireEvent(switchButton, "onValueChange", true);
    expect(spyUpdateWeeklySpendingLimitData).toHaveBeenCalledWith({
      cardID: 1,
      weeklySpendLimitData: {
        enabled: true,
        limit: 2,
      },
    });
  });

  it("handles weeklySpendLimit toggleSwitch with limit 0", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(
      <DebitCardScreen navigation={mockNavigation} />,
      mockStore,
    );

    const switchButton = getByTestId(`toggleSwitch-weeklySpendLimit`);

    fireEvent(switchButton, "onValueChange", true);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      "SelectSpendingLimit",
      { cardDetails: mockStore.debitCardModule.debitCardData[0] },
    );
  });

  it("handles freezeCard toggleSwitch", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const switchButton = getByTestId(`toggleSwitch-freezeCard`);

    fireEvent(switchButton, "onValueChange", true);
    expect(spyUpdateFreezeCardData).toHaveBeenCalledWith({
      cardID: 1,
      enabled: true,
    });
  });

  it("handles Top-up account menu", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const menuItem = getByTestId(`menuItem-topup`);

    fireEvent(menuItem, "onPress", true);
    expect(alert).toHaveBeenCalled();
  });

  it("handles Deactivated cards menu", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const menuItem = getByTestId(`menuItem-deactivatedCard`);

    fireEvent(menuItem, "onPress", true);
    expect(alert).toHaveBeenCalled();
  });

  it("handles Get a new card menu", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const menuItem = getByTestId(`menuItem-getNewCard`);

    fireEvent(menuItem, "onPress", true);
    // expect(alert).toHaveBeenCalled();
  });

  it("handles Show Card Number Button", () => {
    const mockStore = {
      debitCardModule: {
        debitCardData: [
          {
            id: 1,
            holderName: "Mark Henry",
            cardNumber: "5647893214567890",
            expiryDate: "12/20",
            cvv: "123",
            balance: 3000,
            currency: "S$",
            weeklySpendLimit: { enabled: false, limit: 0 },
            freezeCard: { enabled: false },
          },
        ],
      },
    };

    const { getByTestId } = renderComponents(<DebitCardScreen />, mockStore);

    const showCardButton = getByTestId(`showCardButton`);

    fireEvent(showCardButton, "onPress", true);
  });
});
