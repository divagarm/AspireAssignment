import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "../components/appContainer/appContainer";
import { Text } from "react-native";

describe("AppContainer Component", () => {
  const renderWithNavigation = (component) => {
    return render(<NavigationContainer>{component}</NavigationContainer>);
  };

  it("renders children correctly", () => {
    const { getByText } = renderWithNavigation(
      <AppContainer>
        <Text>Test Child</Text>
      </AppContainer>
    );
    expect(getByText("Test Child")).toBeTruthy();
  });

  it("renders the header when showHeader is true", () => {
    const { getByText } = renderWithNavigation(
      <AppContainer title="Test Title" showHeader={true} />
    );
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("does not render the header when showHeader is false", () => {
    const { queryByText } = renderWithNavigation(
      <AppContainer title="Test Title" showHeader={false} />
    );
    expect(queryByText("Test Title")).toBeNull();
  });

  it("calls backPress function when back button is pressed", () => {
    const mockBackPress = jest.fn();
    const { getByTestId } = renderWithNavigation(
      <AppContainer title="Test Title" showHeader={true} backPress={mockBackPress} />
    );

    fireEvent.press(getByTestId("back-button"));
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });
});
