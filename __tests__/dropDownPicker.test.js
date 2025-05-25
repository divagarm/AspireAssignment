import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Dropdown from "../components/dropDownPicker/dropDownPicker";
import { TOptions } from "../Constants/TypesConstants";

describe("Dropdown Component", () => {
  const mockOnChangeValue = jest.fn();
  const mockOptions: TOptions[] = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(
      <Dropdown
        questionId={1}
        options={mockOptions}
        index={0}
        onChangeValue={mockOnChangeValue}
      />
    );

    expect(getByTestId("dropdown-picker-1")).toBeTruthy();
  });

  it("opens dropdown when pressed", async () => {
    const { getByTestId, getByText } = render(
      <Dropdown
        questionId={1}
        options={mockOptions}
        index={0}
        onChangeValue={mockOnChangeValue}
      />
    );

    const dropdown = getByTestId("dropdown-picker-1");

    fireEvent.press(dropdown);

    // Wait for an option to appear
    await waitFor(() => {
      expect(getByText("Select an option")).toBeTruthy();
    });
  });

  it("calls onChangeValue and test the props", async () => {
    const { getByTestId, getByText } = render(
      <Dropdown
        questionId={1}
        options={mockOptions}
        index={0}
        onChangeValue={mockOnChangeValue}
      />
    );
    const dropdown = getByTestId("dropdown-picker-1");
    fireEvent(dropdown, "onChangeValue");
    expect(mockOnChangeValue).toHaveBeenCalledWith(mockOptions, 1, undefined);
  });

  it("applies correct zIndex based on index", () => {
    const { getByTestId } = render(
      <Dropdown
        questionId={1}
        options={mockOptions}
        index={2}
        onChangeValue={mockOnChangeValue}
      />
    );
    const dropdown = getByTestId("dropdown-picker-1");
    expect(dropdown.props.style.zIndex).toBe(3000 - 2 * 1000);
  });

  it("applies correct zIndex to view based on open", async () => {
    const { getByTestId } = render(
      <Dropdown
        questionId={1}
        options={mockOptions}
        index={2}
        onChangeValue={mockOnChangeValue}
      />
    );
    const dropdownView = getByTestId("dropdown-1");
    const dropdown = getByTestId("dropdown-picker-1");
    fireEvent(dropdown, "setOpen", true);
    expect(dropdownView.props.style.zIndex).toBe(2);
  });
});
