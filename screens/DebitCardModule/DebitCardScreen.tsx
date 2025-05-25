import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ViewStyle,
  TextStyle,
  ScrollView
} from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import debitCardScreenStyles from "./DebitCardScreen.style";
import { DebitCardScreenProps, MenuItemData } from './DebitCardTypeConstants';
import { statusBarData } from '../../common/constants/constantValue';
// import TopUp from "../../assets/top_up.svg";
// import WeeklySpendLimit from "../../assets/weekly_spend_limit.svg";
// import FreezeCard from "../../assets/freeze_card.svg";
// import GetNewCard from "../../assets/get_new_card.svg";
// import DeactivatedCard from "../../assets/deactivated_cards.svg";

const { width } = Dimensions.get('window');

const DebitCardScreen: React.FC<DebitCardScreenProps> = ({
  cardData = {
    holderName: 'Mark Henry',
    cardNumber: '5647893214567890',
    expiryDate: '12/20',
    cvv: '123',
    balance: 3000,
    currency: 'S$',
  },
  onTopUp,
  onSetSpendingLimit,
  onFreezeCard,
  onNavigate,
}) => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);

  const menuItems: MenuItemData[] = [
    {
      id: 'topup',
      title: 'Top-up account',
      subtitle: 'Deposit money to your account to use with card',
      icon: ""
    },
    {
      id: 'spending-limit',
      title: 'Weekly spending limit',
      subtitle: "You haven't set any spending limit on card",
      icon: ""
    },
    {
      id: 'freeze-card',
      title: 'Freeze card',
      subtitle: 'Your debit card is currently active',
      icon: ""
    },
    {
      id: 'get-new-card',
      title: 'Get a new card',
      subtitle: 'This deactivates your current debit card',
      icon: ""
    },
    {
      id: 'deactivated-card',
      title: 'Deactivated cards',
      subtitle: 'Your previously deactivated cards',
      icon: ""
    }
  ];

  const formatCardNumber = (number: string, masked: boolean = true): string => {
    if (masked) {
      return `•••• •••• •••• ${number.slice(-4)}`;
    }
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatBalance = (amount: number): string => {
    return amount.toLocaleString();
  };

  const handleMenuItemPress = (itemId: string): void => {
    switch (itemId) {
      case 'topup':
        onTopUp?.();
        break;
      case 'spending-limit':
        onSetSpendingLimit?.();
        break;
      case 'freeze-card':
        onFreezeCard?.();
        break;
      default:
        break;
    }
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
              <Text style={debitCardScreenStyles.balanceAmount}>{formatBalance(cardData.balance)}</Text>
            </View>
          </View>
        </View>
      
        <ScrollView 
        style={{height: '70%', zIndex: 10 }}
        contentContainerStyle={{
          paddingTop:
            (debitCardScreenStyles.header.height || 50) +
            (debitCardScreenStyles.balanceSection.height || 80), // adjust these values as per your style
        }}>
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
            {/* Menu Options */}
            <View style={debitCardScreenStyles.menuContainer}>
              {menuItems.map((item) => (
                <TouchableOpacity 
                  key={item.id}
                  style={debitCardScreenStyles.menuItem}
                  onPress={() => handleMenuItemPress(item.id)}
                  activeOpacity={0.7}
                >
                  <View style={debitCardScreenStyles.menuIcon}>
                    {/* <TopUp width = {32} height = {32} /> */}
                  </View>
                  <View style={debitCardScreenStyles.menuTextContainer}>
                    <Text style={debitCardScreenStyles.menuTitle}>{item.title}</Text>
                    <Text style={debitCardScreenStyles.menuSubtitle}>{item.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
};

export default DebitCardScreen;