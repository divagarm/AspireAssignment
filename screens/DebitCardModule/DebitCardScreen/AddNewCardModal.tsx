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
import * as Yup from "yup";
import { Formik } from "formik";

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
    height: "42%",
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
        <Formik
          initialValues={{
            cardNumber: "",
            cardHolderName: "",
          }}
          onSubmit={() => {}}
          validationSchema={Yup.object().shape({
            cardNumber: Yup.string()
              .required("required")
              .matches(/^\d{16}$/, "Enter a valid 16-digit card number"),
            cardHolderName: Yup.string().required("required"),
          })}
          validateOnMount
          validateOnBlur
          validateOnChange
          component={({
            handleChange,
            handleBlur,
            setFieldValue,
            touched,
            values,
            errors,
            isValid,
          }: any) => {
            const { cardNumber, cardHolderName } = values;

            return (
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
                  onChangeText={handleChange("cardNumber")}
                  onBlur={handleBlur("cardNumber")}
                  placeholder="XXXX XXXX XXXX XXXX"
                  keyboardType="numeric"
                  maxLength={16}
                />
                {touched.cardNumber && errors.cardNumber ? (
                  <Text style={{ color: "red" }}>{errors.cardNumber}</Text>
                ) : null}
                <Text style={styles.title2}>Card Holder Name</Text>
                <TextInput
                  style={styles.input}
                  value={cardHolderName}
                  onChangeText={handleChange("cardHolderName")}
                  onBlur={handleBlur("cardHolderName")}
                  placeholder="Enter card holder name"
                />
                {touched.cardHolderName && errors.cardHolderName ? (
                  <Text style={{ color: "red" }}>{errors.cardHolderName}</Text>
                ) : null}
                <View style={styles.saveButtonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.saveButton,
                      isValid && styles.saveButtonEnabled,
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
                      setFieldValue("cardNumber", "");
                      setFieldValue("cardHolderName", "");
                    }}
                    disabled={!isValid}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.saveButtonText,
                        isValid && styles.saveButtonTextEnabled,
                      ]}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
};

export default AddNewCardModal;
