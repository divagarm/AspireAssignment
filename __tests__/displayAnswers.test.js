import React from "react";
import DisplayAnswerScreen from "../screens/displayAnswers/displayAnswers";
import { questions } from "../Constants/ConstantValue";
import { renderComponents } from "./jestHelperFunctions";
describe("DisplayAnswerScreen Component", () => {
  let store = {
    assessmentData: {
      assessmentData: {
        1: { answer: "Option A" },
        2: { answer: "Option B" },
        3: { answer: "Option C" },
        4: { answer: "Option D" },
        5: { answer: "Option E" },
      },
    },
  };

  it("renders correctly", () => {
    const { getByText } = renderComponents(<DisplayAnswerScreen />, store);

    expect(getByText("Review Your Responses")).toBeTruthy();
  });

  it("renders all questions", () => {
    const { getByText } = renderComponents(<DisplayAnswerScreen />, store);

    questions.forEach((question, index) => {
      expect(getByText(`${index + 1}. ${question.question}`)).toBeTruthy();
    });
  });

  it("displays the correct answer from assessmentData", () => {
    const { getByText, debug } = renderComponents(
      <DisplayAnswerScreen />,
      store
    );
    expect(getByText("Answer: Option A")).toBeTruthy();
    expect(getByText("Answer: Option B")).toBeTruthy();
    expect(getByText("Answer: Option C")).toBeTruthy();
    expect(getByText("Answer: Option D")).toBeTruthy();
    expect(getByText("Answer: Option E")).toBeTruthy();
  });
});
