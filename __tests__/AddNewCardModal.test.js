import AddNewCardModal from "../screens/DebitCardModule/DebitCardScreen/AddNewCardModal";
import * as actions from "../redux/actions/debitCardModuleActions";
import { mockNavigation, renderComponents } from "./jestHelperFunctions";
import { fireEvent } from "@testing-library/react-native";

describe("AddNewCardModal Component", () => {
  const spyAddNewDebitCard = jest.spyOn(actions, "addNewDebitCard");

  it("renders correctly", () => {
    const { getByText } = renderComponents(
      <AddNewCardModal
        addNewCardModalVisible={true}
        setAddNewCardModalVisible={() => {}}
      />,
    );

    expect(getByText("Card Number")).toBeTruthy();
    expect(getByText("Card Holder Name")).toBeTruthy();
  });

  it("handles close Button", () => {
    const { getByTestId } = renderComponents(
      <AddNewCardModal
        addNewCardModalVisible={true}
        setAddNewCardModalVisible={() => {}}
      />,
    );
    const closeButton = getByTestId(`closeButton`);

    fireEvent(closeButton, "onPress", true);
  });

  it("handles save Button", () => {
    const { getByTestId } = renderComponents(
      <AddNewCardModal
        addNewCardModalVisible={true}
        setAddNewCardModalVisible={() => {}}
      />,
    );
    const saveButton = getByTestId(`saveButton`);

    fireEvent(saveButton, "onPress", true);

    expect(spyAddNewDebitCard).toHaveBeenCalled();
  });
});
