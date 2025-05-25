import React from "react";
import { fireEvent } from "@testing-library/react-native";
import Header from "../components/appHeader/appHeader";
import { renderComponents } from "./jestHelperFunctions";

describe("Header Component", () => {
  it("renders the header title correctly", () => {
    const { getByText } = renderComponents(<Header title="Test Title" />);
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("calls backPress function when back button is pressed", () => {
    const mockBackPress = jest.fn();
    const { getByTestId } = renderComponents(
      <Header title="Test Title" backPress={mockBackPress} />
    );

    fireEvent.press(getByTestId("back-button"));
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });

  it("calls navigation.goBack function when back button is pressed without backPress prop", () => {
    const mockGoBack = jest.fn();
    jest
      .spyOn(require("@react-navigation/native"), "useNavigation")
      .mockReturnValue({
        goBack: mockGoBack,
      });
    const { getByTestId } = renderComponents(<Header title="Test Title" />);

    fireEvent.press(getByTestId("back-button"));
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});
