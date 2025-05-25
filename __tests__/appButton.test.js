import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AppButton from "../components/appButton/appButton";
import Colors from "../theme/color";

describe("AppButton Component", () => {
  it("renders correctly with given title", () => {
    const { getByText } = render(
      <AppButton title="Click Me" onPress={() => {}} />
    );
    expect(getByText("Click Me")).toBeTruthy();
  });

  it("calls empty default function when onPress prop is not passed", () => {
    const SpyOnConsole = jest.spyOn(console, "log");
    const { getByText } = render(<AppButton title="Click Me" />);

    const buttonText = getByText("Click Me");
    fireEvent.press(buttonText);

    expect(SpyOnConsole).toHaveBeenCalledWith("Button Click Me pressed");
  });

  it("calls onPress function when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <AppButton title="Press Me" onPress={mockOnPress} />
    );

    fireEvent.press(getByText("Press Me"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress function when forceDisabled is true", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <AppButton title="Disabled" onPress={mockOnPress} forceDisabled={true} />
    );

    fireEvent.press(getByText("Disabled"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("applies disabled styles when forceDisabled is true", () => {
    const { getByText } = render(
      <AppButton title="Disabled" onPress={() => {}} forceDisabled={true} />
    );

    const buttonText = getByText("Disabled");
    expect(buttonText.props.style.color).toBe(Colors.backgroundLight);
  });
});
