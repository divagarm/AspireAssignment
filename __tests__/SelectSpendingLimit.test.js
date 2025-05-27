import SelectSpendingLimit from "../screens/DebitCardModule/SelectSpendingLimit/SelectSpendingLimit";
import * as actions from "../redux/actions/debitCardModuleActions";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";
import { fireEvent } from "@testing-library/react-native";

describe("SelectSpendingLimit Component", () => {
  const spyUpdateWeeklySpendingLimitData = jest.spyOn(
    actions,
    "updateWeeklySpendingLimitData",
  );

  const cardDetails = {
    id: 1,
    holderName: "Mark Henry",
    cardNumber: "5647893214567890",
    expiryDate: "12/20",
    cvv: "123",
    balance: 3000,
    currency: "S$",
    weeklySpendLimit: { enabled: false, limit: 0 },
    freezeCard: { enabled: false },
  };

  it("renders all spending limit options and save button", () => {
    const { getByText, getByTestId } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
      />,
    );

    expect(getByText("S$ 5,000")).toBeTruthy();
    expect(getByText("S$ 10,000")).toBeTruthy();
    expect(getByText("S$ 20,000")).toBeTruthy();
    expect(getByTestId("save-spending-limit-button")).toBeTruthy();
  });

  it("handles limit selection", () => {
    const { getByTestId } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
      />,
    );

    const limitOption = getByTestId(`spending-limit-option-5000`);

    fireEvent(limitOption, "onPress");
  });

  it("save button is disabled when no limit is selected", () => {
    const { getByTestId } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
      />,
    );
    const saveButton = getByTestId("save-spending-limit-button");
    console.log("xxx saveButton", saveButton.props.accessibilityState);
    expect(saveButton.props.accessibilityState.disabled).toBe(true);
  });

  it("save button is enabled after selecting a limit", () => {
    const { getByTestId, getByText } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
      />,
    );
    fireEvent.press(getByText("S$ 5,000"));
    const saveButton = getByTestId("save-spending-limit-button");
    expect(saveButton.props.accessibilityState.disabled).toBe(false);
  });

  it("dispatches update action and shows alert when save is pressed with a limit", () => {
    const { getByText, getByTestId } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
      />,
    );
    fireEvent.press(getByText("S$ 20,000"));
    fireEvent.press(getByTestId("save-spending-limit-button"));

    expect(spyUpdateWeeklySpendingLimitData).toHaveBeenCalledWith({
      cardID: 1,
      weeklySpendLimitData: {
        enabled: true,
        limit: 20000,
      },
    });
  });

  it("calls navigation.goBack when back button is pressed", () => {
    const { getByText, getByTestId } = renderComponents(
      <SelectSpendingLimit
        route={{
          params: {
            cardDetails: cardDetails,
          },
        }}
        navigation={mockNavigation}
      />,
    ); // The back button is the first button in the header
    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
