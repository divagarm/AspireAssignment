import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../screens/homeScreen/homeScreen";
import { TNavigation } from "../Constants/TypesConstants";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";


  
describe("HomeScreen Component", () => {
  

  it("renders correctly", () => {
    const { getByText } = renderComponents(<HomeScreen navigation={mockNavigation}/>);

    expect(getByText("Welcome to Risk Vault!")).toBeTruthy();
    expect(getByText("Start the questionnaire to assess your risk score.")).toBeTruthy();
  });

  it("navigates to Questions screen when button is pressed", () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);

    fireEvent.press(getByText("Begin Questionaire"));

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Questions");
  });
});
