import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { AddNewCardModalProps } from "../TypeConstants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootStateTypes } from "../../../redux/types/RootStateTypes";
import { addNewDebitCard } from "../../../redux/actions/debitCardModuleActions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    height: "40%",
    width: "80%",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: "#eee",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
    lineHeight: 22,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  title2: {
    fontSize: 18,
    marginBottom: 4,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    height: 50,
  },
  saveButtonContainer: {
    marginTop: "auto",
  },
  saveButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  saveButtonEnabled: {
    backgroundColor: "#4CAF50",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#999",
  },
  saveButtonTextEnabled: {
    color: "white",
  },
});

const generateRandomExpiryDate = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(
    new Date().getFullYear() + Math.floor(Math.random() * 6),
  ).slice(-2);
  return `${month}/${year}`;
};

const generateRandomCVV = () => {
  return String(Math.floor(100 + Math.random() * 900));
};

const AddNewCardModal: React.FC<AddNewCardModalProps> = ({
  addNewCardModalVisible,
  setAddNewCardModalVisible,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const debitCardData = useSelector(
    (state: RootStateTypes) => state.debitCardModule.debitCardData ?? [],
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={addNewCardModalVisible}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setAddNewCardModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Card Number</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="XXXX XXXX XXXX XXXX"
            keyboardType="numeric"
            maxLength={16}
          />
          <Text style={styles.title2}>Card Holder Name</Text>
          <TextInput
            style={styles.input}
            value={cardHolderName}
            onChangeText={setCardHolderName}
            placeholder="Enter card name"
          />
          <View style={styles.saveButtonContainer}>
            <TouchableOpacity
              style={[
                styles.saveButton,
                cardNumber.length === 16 &&
                  cardHolderName.length > 0 &&
                  styles.saveButtonEnabled,
              ]}
              onPress={() => {
                dispatch(
                  addNewDebitCard({
                    id: debitCardData.length + 1,
                    holderName: cardHolderName,
                    cardNumber: cardNumber,
                    expiryDate: generateRandomExpiryDate(),
                    cvv: generateRandomCVV(),
                    balance: 500,
                    currency: "S$",
                    weeklySpendLimit: { enabled: false, limit: 0 },
                    freezeCard: { enabled: false },
                  }),
                );
                setAddNewCardModalVisible(false);
                setCardNumber("");
                setCardHolderName("");
              }}
              disabled={
                cardNumber.length === 16 && cardHolderName.length > 0
                  ? false
                  : true
              }
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.saveButtonText,
                  cardNumber.length === 16 &&
                    cardHolderName.length > 0 &&
                    styles.saveButtonTextEnabled,
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewCardModal;
