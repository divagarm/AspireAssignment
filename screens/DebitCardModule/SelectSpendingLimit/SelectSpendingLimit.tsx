import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import {
  SelectSpendingLimitProps,
  SpendingLimitOption,
  SpendingLimitScreenNavigationProp,
} from "../TypeConstants";
import selectSpendingLimitScreenStyles from "./SelectSpendingLimit.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import colors from "../../../common/theme/color";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { updateWeeklySpendingLimitData } from "../../../redux/actions/debitCardModuleActions";

const SelectSpendingLimit: React.FC<SelectSpendingLimitProps> = (props) => {
  const cardDetails = props.cardDetails || {};
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation<SpendingLimitScreenNavigationProp>();
  const [selectedLimit, setSelectedLimit] = useState<number>(
    cardDetails?.weeklySpendLimit?.limit || 0,
  );

  // Predefined spending limit options
  const spendingLimitOptions: SpendingLimitOption[] = [
    {
      id: "5000",
      amount: 5000,
      displayText: "S$ 5,000",
    },
    {
      id: "10000",
      amount: 10000,
      displayText: "S$ 10,000",
    },
    {
      id: "20000",
      amount: 20000,
      displayText: "S$ 20,000",
    },
  ];

  const handleLimitSelection = (amount: number): void => {
    setSelectedLimit(amount);
  };

  const handleSave = (): void => {
    if (selectedLimit === 0) {
      Alert.alert(
        "No Limit Selected",
        "Please select a spending limit before saving.",
        [{ text: "OK", style: "default" }],
      );
      return;
    }

    dispatch(
      updateWeeklySpendingLimitData({
        cardID: cardDetails.id,
        weeklySpendLimitData: {
          enabled: true,
          limit: selectedLimit,
        },
      }),
    );

    // Show success message
    Alert.alert(
      "Spending Limit Updated",
      `Your weekly spending limit has been set to S$ ${selectedLimit.toLocaleString()}.`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const isLimitSelected = (amount: number): boolean => {
    return selectedLimit === amount;
  };

  const isSaveEnabled = (): boolean => {
    return selectedLimit > 0;
  };

  return (
    <>
      <SafeAreaView style={selectSpendingLimitScreenStyles.topSafeAreaView} />
      <SafeAreaView style={selectSpendingLimitScreenStyles.bottomSafeAreaView}>
        <StatusBar barStyle="light-content" backgroundColor="#0C365A" />

        <View style={{ flex: 1 }}>
          <View style={selectSpendingLimitScreenStyles.topContainer}>
            {/* Header */}
            <View style={selectSpendingLimitScreenStyles.header}>
              <TouchableOpacity
                style={selectSpendingLimitScreenStyles.backButton}
                onPress={handleGoBack}
                activeOpacity={0.7}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>

              <View style={selectSpendingLimitScreenStyles.logoContainer}>
                <View style={selectSpendingLimitScreenStyles.logo}>
                  <Ionicons name="chevron-up" size={20} color="white" />
                </View>
              </View>
            </View>

            {/* Title */}
            <View style={selectSpendingLimitScreenStyles.titleContainer}>
              <Text style={selectSpendingLimitScreenStyles.title}>
                Spending limit
              </Text>
            </View>
          </View>
          {/* Content */}
          <View style={selectSpendingLimitScreenStyles.content}>
            {/* Header Section */}
            <View style={selectSpendingLimitScreenStyles.contentHeader}>
              <View style={selectSpendingLimitScreenStyles.iconContainer}>
                <Ionicons name="settings-outline" size={24} color="#666" />
              </View>
              <Text style={selectSpendingLimitScreenStyles.contentTitle}>
                Set a weekly debit card spending limit
              </Text>
            </View>

            {/* Currency Badge */}
            <View style={selectSpendingLimitScreenStyles.currencyContainer}>
              <View style={selectSpendingLimitScreenStyles.currencyBadge}>
                <Text style={selectSpendingLimitScreenStyles.currencyText}>
                  S$
                </Text>
              </View>
              <Text style={selectSpendingLimitScreenStyles.selectedLimitText}>
                {selectedLimit.toLocaleString()}
              </Text>
            </View>

            {/* Description */}
            <Text style={selectSpendingLimitScreenStyles.description}>
              Here weekly means the last 7 days - not the calendar week
            </Text>

            {/* Spending Limit Options */}
            <View style={selectSpendingLimitScreenStyles.optionsContainer}>
              {spendingLimitOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    selectSpendingLimitScreenStyles.optionButton,
                    isLimitSelected(option.amount) &&
                      selectSpendingLimitScreenStyles.optionButtonSelected,
                  ]}
                  onPress={() => handleLimitSelection(option.amount)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      selectSpendingLimitScreenStyles.optionText,
                      isLimitSelected(option.amount) &&
                        selectSpendingLimitScreenStyles.optionTextSelected,
                    ]}
                  >
                    {option.displayText}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Save Button */}
            <View style={selectSpendingLimitScreenStyles.saveButtonContainer}>
              <TouchableOpacity
                style={[
                  selectSpendingLimitScreenStyles.saveButton,
                  isSaveEnabled() &&
                    selectSpendingLimitScreenStyles.saveButtonEnabled,
                ]}
                onPress={handleSave}
                disabled={!isSaveEnabled()}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    selectSpendingLimitScreenStyles.saveButtonText,
                    isSaveEnabled() &&
                      selectSpendingLimitScreenStyles.saveButtonTextEnabled,
                  ]}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SelectSpendingLimit;
