import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Switch,
  ScrollView
} from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import debitCardScreenStyles from "./DebitCardScreen.style";
import { DebitCardScreenProps, MenuItemData } from '../TypeConstants';
import { cardData, formatCardNumber, menuItems } from '../Utility';
import { useNavigation } from '@react-navigation/native';
// import TopUp from "../../assets/top_up.svg";
// import WeeklySpendLimit from "../../assets/weekly_spend_limit.svg";
// import FreezeCard from "../../assets/freeze_card.svg";
// import GetNewCard from "../../assets/get_new_card.svg";
// import DeactivatedCard from "../../assets/deactivated_cards.svg";

const { width } = Dimensions.get('window');

const DebitCardScreen: React.FC<DebitCardScreenProps> = () => {

  const navigation = useNavigation();

  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);

  const [toggles, setToggles] = useState({
  weeklySpendLimit: { enabled: false, limit: 0 },
  freezeCard: { enabled: false }
  });

  console.log("xxx toggles", toggles);

  const onSetSpendingLimit = (toggleValue: boolean) => { 
    if(toggles?.weeklySpendLimit?.limit !== 0) {
      setToggles({
        ...toggles,
        weeklySpendLimit: { enabled: toggleValue, limit: toggles.weeklySpendLimit.limit }
      });
    } else {
      navigation.navigate('SelectSpendingLimit', 
        { currentLimit: toggles?.weeklySpendLimit?.limit,
          onSaveLimit: (selectedLimit) => {
            if (selectedLimit !== undefined) {
              setToggles({
                ...toggles,
                weeklySpendLimit: { enabled: toggleValue, limit: selectedLimit }
              });
            }
          }
        });
    }
  };

  const onFreezeCard = (toggleValue: boolean) => { 

  };

  const handleMenuItemPress = (itemId: string, toggleValue: boolean): void => {
    switch (itemId) {
      case 'topup':
        // ToDO
        break;
      case 'weeklySpendLimit':
        onSetSpendingLimit?.(toggleValue);
        break;
      case 'freezeCard':
        onFreezeCard?.(toggleValue);
        break;
      case 'getNewCard':
        // ToDO
      break;
      case 'deactivatedCard':
        // ToDO
      break;
      default:
        break;
    }
  };

  const renderMenuIcon = (item: MenuItemData): JSX.Element => {
    const IconComponent = item.iconLibrary === 'Ionicons' ? Ionicons : MaterialIcons;
    return (
      <IconComponent
        name={item.icon as any}
        size={24}
        color="white"
      />
    );
  };

  return (
    <>
    <SafeAreaView style={debitCardScreenStyles.topSafeAreaView}/>
  
    <SafeAreaView style={debitCardScreenStyles.bottomSafeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="#0C365A" />
      
      <View style={{flex:1}}>
        
        <View style = {{ backgroundColor: '#0C365A', position: 'absolute', height: '40%', top: 0, left: 0, right: 0, zIndex: 1}}>
          {/* Header */}
          <View style={debitCardScreenStyles.header}>
            <View style={debitCardScreenStyles.headerContent}>
              <Text style={debitCardScreenStyles.headerTitle}>Debit Card</Text>
              <View style={debitCardScreenStyles.logoContainer}>
                <View style={debitCardScreenStyles.logo}>
                  <Ionicons name="chevron-up" size={20} color="white" />
                </View>
              </View>
            </View>
          </View>
          {/* Balance Section */}
          <View style={debitCardScreenStyles.balanceSection}>
            <Text style={debitCardScreenStyles.balanceLabel}>Available balance</Text>
            <View style={debitCardScreenStyles.balanceContainer}>
              <View style={debitCardScreenStyles.currencyBadge}>
                <Text style={debitCardScreenStyles.currencyText}>{cardData.currency}</Text>
              </View>
              <Text style={debitCardScreenStyles.balanceAmount}>{cardData.balance.toLocaleString()}</Text>
            </View>
          </View>
        </View>
      
        <ScrollView 
        style={{height: '70%', zIndex: 10 }}
        contentContainerStyle={{
          paddingTop: "30%"
        }}
        showsVerticalScrollIndicator={false}>
          {/* Show Card Number Button */}
          <View style={debitCardScreenStyles.showCardContainer}>
            <TouchableOpacity 
              style={debitCardScreenStyles.showCardButton}
              onPress={() => setShowCardNumber(!showCardNumber)}
              activeOpacity={0.7}
            >
              <Feather name="eye" size={16} color="#4CAF50" />
              <Text style={debitCardScreenStyles.showCardText}>Show card number</Text>
            </TouchableOpacity>
          </View>

          {/* Debit Card */}
          <View>
            <View style={debitCardScreenStyles.cardAbsoluteContainer}>
              <View style={debitCardScreenStyles.cardAbsoluteWhiteContainer}/>
            </View>
            
            <View style={debitCardScreenStyles.card}>
              <View style={debitCardScreenStyles.cardHeader}>
                <View style={debitCardScreenStyles.aspireLogoContainer}>
                  <View style={debitCardScreenStyles.aspireLogo}>
                    <Ionicons name="chevron-up" size={16} color="white" />
                  </View>
                  <Text style={debitCardScreenStyles.aspireText}>aspire</Text>
                </View>
              </View>
              
              <Text style={debitCardScreenStyles.cardholderName}>{cardData.holderName}</Text>
              
              <View style={debitCardScreenStyles.cardNumberContainer}>
                <Text style={debitCardScreenStyles.cardNumber}>
                  {formatCardNumber(cardData.cardNumber, !showCardNumber)}
                </Text>
              </View>
              
              <View style={debitCardScreenStyles.cardFooter}>
                <View>
                  <Text style={debitCardScreenStyles.cardLabel}>Thru: {cardData.expiryDate}</Text>
                </View>
                <View>
                  <Text style={debitCardScreenStyles.cardLabel}>
                    CVV: {showCardNumber ? cardData.cvv : '***'}
                  </Text>
                </View>
                <View style={debitCardScreenStyles.visaContainer}>
                  <Text style={debitCardScreenStyles.visaText}>VISA</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={debitCardScreenStyles.bottomContainer}>
            {/* Daily card spending limit */}
            {
              (toggles?.weeklySpendLimit?.enabled && toggles?.weeklySpendLimit?.limit) && 
              (
                <View style={debitCardScreenStyles.limitContainer}>
                  <View style={debitCardScreenStyles.limitHeader}>
                    <Text>
                    Debit card spending limit
                    </Text>
                    <Text style={debitCardScreenStyles.limitAmount}>
                      <Text style={debitCardScreenStyles.balanceCurrency}>
                        ${cardData.balance}
                      </Text>
                      <Text style={debitCardScreenStyles.limitCurrency}>
                        |   ${toggles?.weeklySpendLimit?.limit.toLocaleString()}
                      </Text>
                    </Text>
                  </View>
                  <View style={debitCardScreenStyles.progressBarContainer}>
                    <View style={[ debitCardScreenStyles.progressBarFill, { width: `${(parseInt(cardData.balance) / parseInt(toggles?.weeklySpendLimit?.limit)) * 100}%`}]} />
                  </View>
                </View>
              )
            }

            {/* Menu Options */}
            <View style={debitCardScreenStyles.menuContainer}>
              {menuItems.map((item) => {
                let title = item.title;
                let subtitle = item.subtitle;
                let toggled;
                if(item.toggleable) {
                    toggled = toggles?.[item.id]?.enabled;
                    if (item.id === 'weeklySpendLimit') {
                        title = toggled ? item.inverseTitle : item.title;
                        subtitle = toggled ? item.inverseSubtitle + toggles?.[item.id]?.limit : item.subtitle;
                    } else if (item.id === 'freezeCard') {
                        title = toggled ? item.inverseTitle : item.title;
                        subtitle = toggled ? item.inverseSubtitle : item.subtitle;
                    }
                }

                return (
                <TouchableOpacity 
                  disabled={item.toggleable}
                  key={item.id}
                  style={debitCardScreenStyles.menuItem}
                  onPress={() => handleMenuItemPress(item.id)}
                  activeOpacity={0.7}
                >
                  <View style={debitCardScreenStyles.menuIcon}>
                    {renderMenuIcon(item)}
                    {/* <TopUp width = {32} height = {32} /> */}
                  </View>
                  <View style={debitCardScreenStyles.menuTextContainer}>
                    <Text style={debitCardScreenStyles.menuTitle}>{title}</Text>
                    <Text style={debitCardScreenStyles.menuSubtitle}>{subtitle}</Text>
                  </View>
                  {
                    item.toggleable && (
                      <Switch
                        trackColor={{false: '#EEEEEE', true: '#01D167'}}
                        thumbColor={toggled ? '#EEEEEE' : '#f4f3f4'}
                        ios_backgroundColor="#EEEEEE"
                        onValueChange={(val) => {
                          handleMenuItemPress(item.id, val)
                        }}
                        value={toggled}
                      />
                    )
                  }
                </TouchableOpacity>
              )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
};

export default DebitCardScreen;