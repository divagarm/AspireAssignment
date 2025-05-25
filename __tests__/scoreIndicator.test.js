import { render, waitFor } from "@testing-library/react-native";
import ScoreIndicator from "../components/scoreIndicator/scoreIndicator";

describe("ScoreIndicator Component", () => {
  it("renders correctly with given score", async () => {
    const { getByText, unmount } = render(<ScoreIndicator score={50} />);

    await waitFor(() => {
      expect(getByText("Score: 50")).toBeTruthy();
    });
    unmount(); // Ensures cleanup
  });

  it("displays 'Low' when score is below 40", async () => {
    const { getByText, unmount } = render(<ScoreIndicator score={30} />);

    await waitFor(() => {
      expect(getByText("Low")).toBeTruthy();
    });
    unmount();
  });

  it("displays 'Medium' when score is between 40 and 70", async () => {
    const { getByText, unmount } = render(<ScoreIndicator score={50} />);

    await waitFor(() => {
      expect(getByText("Medium")).toBeTruthy();
    });
    unmount();
  });

  it("displays 'High' when score is above 70", async () => {
    const { getByText, unmount } = render(<ScoreIndicator score={80} />);

    await waitFor(() => {
      expect(getByText("High")).toBeTruthy();
    });
    unmount();
  });
});
