import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Switch,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import debitCardScreenStyles from "./DebitCardScreen.style";
import {
  DebitCardFormat,
  DebitCardScreenProps,
  MenuItemData,
} from "../TypeConstants";
import { formatCardNumber, menuItems } from "../Utility";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStateTypes } from "../../../redux/types/RootStateTypes";
import Carousel, { Pagination } from "react-native-snap-carousel";
import AddNewCardModal from "./AddNewCardModal";
import { AppDispatch } from "../../../redux/store";
import {
  updateFreezeCardData,
  updateWeeklySpendingLimitData,
} from "../../../redux/actions/debitCardModuleActions";

type RootStackParamList = {
  DebitCardScreen: undefined;
  SelectSpendingLimit: { cardDetails: DebitCardFormat };
};

const DebitCardScreen: React.FC<DebitCardScreenProps> = (props) => {
  const { navigation } = props;
  const dispatch: AppDispatch = useDispatch();

  const debitCardData = useSelector(
    (state: RootStateTypes) => state.debitCardModule.debitCardData ?? [],
  );

  const [showCardNumber, setShowCardNumber] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [addNewCardModalVisible, setAddNewCardModalVisible] = useState(false);
  const [currentSelectedCardId, setCurrentSelectedCardId] = useState(
    debitCardData?.[0]?.id,
  );

  const currentSelectedCard = useMemo(() => {
    return (
      debitCardData?.find((card) => card?.id === currentSelectedCardId) ||
      debitCardData?.[0]
    );
  }, [currentSelectedCardId, debitCardData]);

  const onSetSpendingLimit = (toggleValue: boolean) => {
    if (currentSelectedCard?.weeklySpendLimit?.limit !== 0) {
      dispatch(
        updateWeeklySpendingLimitData({
          cardID: currentSelectedCard.id,
          weeklySpendLimitData: {
            enabled: toggleValue,
            limit: currentSelectedCard?.weeklySpendLimit?.limit,
          },
        }),
      );
    } else {
      navigation.navigate("SelectSpendingLimit", {
        cardDetails: currentSelectedCard,
      });
    }
  };

  const onFreezeCard = (toggleValue: boolean) => {
    dispatch(
      updateFreezeCardData({
        cardID: currentSelectedCard.id,
        enabled: toggleValue,
      }),
    );
  };

  const handleMenuItemPress = (itemId: string, toggleValue?: boolean): void => {
    switch (itemId) {
      case "topup":
        alert(
          "Top-up functionality is not implemented yet. Please check back later.",
        );
        break;
      case "weeklySpendLimit":
        onSetSpendingLimit(toggleValue ?? false);
        break;
      case "freezeCard":
        onFreezeCard(toggleValue ?? false);
        break;
      case "getNewCard":
        setAddNewCardModalVisible(true);
        break;
      case "deactivatedCard":
        alert(
          "Deactivated card functionality is not implemented yet. Please check back later.",
        );
        break;
      default:
        break;
    }
  };

  const renderMenuIcon = (item: MenuItemData): JSX.Element => {
    const menuIcons: { [key: string]: any } = {
      topup: require("../../../assets/top_up.png"),
      weeklySpendLimit: require("../../../assets/weekly_report.png"),
      freezeCard: require("../../../assets/freeze_card.png"),
      getNewCard: require("../../../assets/get_new_card.png"),
      deactivatedCard: require("../../../assets/deactivated_cards.png"),
    };

    return <Image source={menuIcons[item.id]} />;
  };

  return (
    <>
      <SafeAreaView style={debitCardScreenStyles.topSafeAreaView} />

      <SafeAreaView style={debitCardScreenStyles.bottomSafeAreaView}>
        <StatusBar barStyle="light-content" backgroundColor="#0C365A" />

        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#0C365A",
              position: "absolute",
              height: "35%",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            {/* Header */}
            <View style={debitCardScreenStyles.header}>
              <View style={debitCardScreenStyles.headerContent}>
                <Text style={debitCardScreenStyles.headerTitle}>
                  Debit Card
                </Text>
                <View style={debitCardScreenStyles.logoContainer}>
                  <Image source={require("../../../assets/logo.png")} />
                </View>
              </View>
            </View>
            {/* Balance Section */}
            <View style={debitCardScreenStyles.balanceSection}>
              <Text style={debitCardScreenStyles.balanceLabel}>
                Available balance
              </Text>
              <View style={debitCardScreenStyles.balanceContainer}>
                <View style={debitCardScreenStyles.currencyBadge}>
                  <Text style={debitCardScreenStyles.currencyText}>
                    {currentSelectedCard?.currency}
                  </Text>
                </View>
                <Text style={debitCardScreenStyles.balanceAmount}>
                  {currentSelectedCard?.balance?.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>

          <ScrollView
            style={{ height: "80%", zIndex: 10 }}
            contentContainerStyle={{
              paddingTop: "30%",
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ alignItems: "center" }}>
              <Carousel
                data={debitCardData}
                renderItem={({
                  item: currentSelectedCard,
                  index,
                }: {
                  item: any;
                  index: number;
                }) => (
                  <>
                    {/* Show Card Number Button */}
                    <View style={debitCardScreenStyles.showCardContainer}>
                      <TouchableOpacity
                        testID="showCardButton"
                        style={debitCardScreenStyles.showCardButton}
                        onPress={() => setShowCardNumber(!showCardNumber)}
                        activeOpacity={0.7}
                      >
                        <Feather
                          name={showCardNumber ? "eye-off" : "eye"}
                          size={16}
                          color="#4CAF50"
                        />
                        <Text style={debitCardScreenStyles.showCardText}>
                          {showCardNumber
                            ? "Hide card number"
                            : "Show card number"}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {/* Debit Card */}
                    <View>
                      {/* Radius white background */}
                      <View style={debitCardScreenStyles.cardAbsoluteContainer}>
                        <View
                          style={
                            debitCardScreenStyles.cardAbsoluteWhiteContainer
                          }
                        />
                      </View>

                      <View
                        style={[
                          debitCardScreenStyles.card,
                          {
                            backgroundColor: currentSelectedCard?.freezeCard
                              ?.enabled
                              ? "#6ae6a7"
                              : "#01D167",
                          },
                        ]}
                      >
                        <View style={debitCardScreenStyles.cardHeader}>
                          <Image
                            source={require("../../../assets/aspire_logo.png")}
                          />
                        </View>

                        <Text style={debitCardScreenStyles.cardholderName}>
                          {currentSelectedCard?.holderName}
                        </Text>

                        <View style={debitCardScreenStyles.cardNumberContainer}>
                          <Text style={debitCardScreenStyles.cardNumber}>
                            {formatCardNumber(
                              currentSelectedCard?.cardNumber,
                              !showCardNumber,
                            )}
                          </Text>
                        </View>

                        <View style={debitCardScreenStyles.cardFooter}>
                          <View>
                            <Text style={debitCardScreenStyles.cardLabel}>
                              Thru: {currentSelectedCard?.expiryDate}
                            </Text>
                          </View>
                          <View>
                            <Text style={debitCardScreenStyles.cardLabel}>
                              CVV:{" "}
                              {showCardNumber
                                ? currentSelectedCard?.cvv
                                : "***"}
                            </Text>
                          </View>
                        </View>

                        <View style={debitCardScreenStyles.visaContainer}>
                          <Image
                            source={require("../../../assets/visa_logo.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </>
                )}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={Dimensions.get("window").width}
                enableMomentum={true}
                decelerationRate={0.9}
                onSnapToItem={(index: number) => {
                  setActiveSlide(index);
                  setCurrentSelectedCardId(debitCardData?.[index]?.id);
                  setShowCardNumber(false);
                }}
              />
              <Pagination
                dotsLength={debitCardData.length}
                activeDotIndex={activeSlide}
                containerStyle={debitCardScreenStyles.paginationContainerStyle}
                dotStyle={debitCardScreenStyles.paginationDotStyle}
                inactiveDotStyle={
                  {
                    // Define styles for inactive dots here
                  }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </View>

            <View style={debitCardScreenStyles.bottomContainer}>
              {/* Daily card spending limit */}
              {currentSelectedCard?.weeklySpendLimit?.enabled &&
                currentSelectedCard?.weeklySpendLimit?.limit && (
                  <View style={debitCardScreenStyles.limitContainer}>
                    <View style={debitCardScreenStyles.limitHeader}>
                      <Text>Debit card spending limit</Text>
                      <View style={debitCardScreenStyles.limitAmount}>
                        <Text style={debitCardScreenStyles.balanceCurrency}>
                          ${currentSelectedCard?.balance}
                        </Text>
                        <Text style={debitCardScreenStyles.seperationStyle}>
                          |
                        </Text>
                        <Text style={debitCardScreenStyles.limitCurrency}>
                          $
                          {currentSelectedCard?.weeklySpendLimit?.limit?.toLocaleString()}
                        </Text>
                      </View>
                    </View>
                    <View style={debitCardScreenStyles.progressBarContainer}>
                      <View
                        style={[
                          debitCardScreenStyles.progressBarFill,
                          {
                            width: `${(parseInt(String(currentSelectedCard?.balance)) / parseInt(String(currentSelectedCard?.weeklySpendLimit?.limit))) * 100}%`,
                          },
                        ]}
                      />
                    </View>
                  </View>
                )}

              {/* Menu Options */}
              <View style={debitCardScreenStyles.menuContainer}>
                {menuItems.map((item: MenuItemData) => {
                  let title = item.title;
                  let subtitle = item.subtitle;
                  let toggled;
                  if (item.toggleable) {
                    if (item.id === "weeklySpendLimit") {
                      toggled = currentSelectedCard?.weeklySpendLimit?.enabled;
                      title = toggled ? item.inverseTitle : item.title;
                      subtitle = toggled
                        ? item.inverseSubtitle +
                          currentSelectedCard?.weeklySpendLimit?.limit
                        : item.subtitle;
                    } else if (item.id === "freezeCard") {
                      toggled = currentSelectedCard?.freezeCard?.enabled;
                      title = toggled ? item.inverseTitle : item.title;
                      subtitle = toggled ? item.inverseSubtitle : item.subtitle;
                    }
                  }

                  return (
                    <TouchableOpacity
                      testID={`menuItem-${item.id}`}
                      disabled={item.toggleable}
                      key={item.id}
                      style={debitCardScreenStyles.menuItem}
                      onPress={() => handleMenuItemPress(item.id)}
                      activeOpacity={0.7}
                    >
                      {renderMenuIcon(item)}
                      <View style={debitCardScreenStyles.menuTextContainer}>
                        <Text style={debitCardScreenStyles.menuTitle}>
                          {title}
                        </Text>
                        <Text style={debitCardScreenStyles.menuSubtitle}>
                          {subtitle}
                        </Text>
                      </View>
                      {item.toggleable && (
                        <Switch
                          testID={`toggleSwitch-${item.id}`}
                          trackColor={{ false: "#EEEEEE", true: "#01D167" }}
                          thumbColor={toggled ? "#EEEEEE" : "#f4f3f4"}
                          ios_backgroundColor="#EEEEEE"
                          onValueChange={(val) => {
                            handleMenuItemPress(item.id, val);
                          }}
                          value={toggled}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <AddNewCardModal
            addNewCardModalVisible={addNewCardModalVisible}
            setAddNewCardModalVisible={setAddNewCardModalVisible}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DebitCardScreen;
