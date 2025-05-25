import React from "react";
import { fireEvent, waitFor } from "@testing-library/react-native";
import ScoreDisplayScreen from "../screens/scoreDisplayScreen/scoreDisplayScreen";
import * as actions from "../redux/actions/assessment";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";

describe("ScoreDisplayScreen Component", () => {
  let store = {
    assessmentData: {
      finalScore: 75, // Mocking a final score
    },
  };

  it("renders correctly", async () => {
    const { getByText, getByTestId, unmount } = renderComponents(
      <ScoreDisplayScreen navigation={mockNavigation} />,
      store
    );
    await waitFor(() => {
      expect(getByText("Your Risk Assessment Result")).toBeTruthy();
      expect(getByTestId("animated-bar")).toBeTruthy(); // Ensure ScoreIndicator is rendered
    });
    unmount();
  });

  it("navigates to DisplayAnswer screen when 'View Your Responses' is pressed", async () => {
    const { getByText, unmount } = renderComponents(
      <ScoreDisplayScreen navigation={mockNavigation} />,
      store
    );

    await waitFor(() => {
      fireEvent.press(getByText("View Your Responses"));
      expect(mockNavigation.navigate).toHaveBeenCalledWith("DisplayAnswer");
    });
    unmount();
  });

  it("resets assessment and navigates to Questions when 'Retake Assessment' is pressed", async () => {
    const { getByText, unmount } = renderComponents(
      <ScoreDisplayScreen navigation={mockNavigation} />,
      store
    );
    const resetAssessmentData = jest.spyOn(actions, "resetAssessmentData");
    const resetFinalScore = jest.spyOn(actions, "resetFinalScore");

    fireEvent.press(getByText("Retake Assessment"));
    await waitFor(() => {
      expect(resetAssessmentData).toHaveBeenCalled();
      expect(resetFinalScore).toHaveBeenCalled();
      expect(mockNavigation.popToTop).toHaveBeenCalled();
      expect(mockNavigation.navigate).toHaveBeenCalledWith("Questions");
    });
    unmount();
  });
});
