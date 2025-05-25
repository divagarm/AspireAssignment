import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { questions } from "../Constants/ConstantValue";
import QuestionsScreen from "../screens/questionsScreen/questionsScreen";
import * as actions from "../redux/actions/assessment";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";

describe("QuestionsScreen Component", () => {
  const resetAssessmentData = jest.spyOn(actions, "resetAssessmentData");
  const resetFinalScore = jest.spyOn(actions, "resetFinalScore");
  const setAssessmentData = jest.spyOn(actions, "setAssessmentData");
  const setFinalScore = jest.spyOn(actions, "setFinalScore");

  it("renders correctly", () => {
    const { getByText } = renderComponents(
      <QuestionsScreen navigation={mockNavigation} />
    );

    expect(
      getByText("Answer the following questions to evaluate your risk level.")
    ).toBeTruthy();
  });

  it("renders all questions", () => {
   const { getByText } = renderComponents(
      <QuestionsScreen navigation={mockNavigation} />
    );

    questions.forEach((question, index) => {
      expect(getByText(/1\.\s*What is your primary goal for this bank account?/i)).toBeTruthy();
    });
  });

  it("handles dropdown selection and updates Redux state",  () => {
    const { getByTestId } = renderComponents(
        <QuestionsScreen navigation={mockNavigation} />
      );

    const dropdown = getByTestId(`dropdown-picker-${questions[0].id}`);

    fireEvent(dropdown,'onChangeValue',questions[0].options[0].value);

    expect(setAssessmentData).toHaveBeenCalledWith({
      questionId: questions[0].id,
      answer: questions[0].options[0].label,
      value: questions[0].options[0].value,
      normalizedScore: expect.any(Number),
    });
  });
    
  it("handles dropdown selection and updates Redux state for invalid value",  () => {
    const { getByTestId } = renderComponents(
        <QuestionsScreen navigation={mockNavigation} />
      );

    const dropdown = getByTestId(`dropdown-picker-${questions[0].id}`);

    fireEvent(dropdown,'onChangeValue',-1);

    expect(setAssessmentData).toHaveBeenCalledWith({
      questionId: questions[0].id,
      answer: "None",
      value: -1,
      normalizedScore: expect.any(Number),
    });
  });

  it("disables submit button if not all questions are answered", () => {
    const { getByTestId } = renderComponents(
        <QuestionsScreen navigation={mockNavigation} />
      );

    const submitButton = getByTestId('submit-button');

    expect(submitButton.props.accessibilityState.disabled).toBe(true);
  });

  it("navigates to ScoreDisplay screen on submit", async () => {
   const store = {
      assessmentData: {
        assessmentData: Object.fromEntries(
          questions.map((q) => [
            q.id,
            { answer: "Test", value: 1, normalizedScore: 1 },
          ])
        ),
      },
    }

    const { getByText } = renderComponents(
        <QuestionsScreen navigation={mockNavigation} />, store
      );

    fireEvent.press(getByText("Submit"));

    expect(setFinalScore).toHaveBeenCalledWith(expect.any(Number));
    expect(mockNavigation.navigate).toHaveBeenCalledWith("ScoreDisplay");
  });

  it("handles back press and resets assessment data", () => {
    const { getByTestId } = renderComponents(
        <QuestionsScreen navigation={mockNavigation} />
      );


    fireEvent.press(getByTestId("back-button"));

    expect(resetAssessmentData).toHaveBeenCalled();
    expect(resetFinalScore).toHaveBeenCalled();
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
