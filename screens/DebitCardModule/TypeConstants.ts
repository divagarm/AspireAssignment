import { StackNavigationProp } from "@react-navigation/stack";

export interface CardData {
  holderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  balance: number;
  currency: string;
}

export interface MenuItemData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconLibrary: string;
  toggleable: boolean;
  inverseTitle: string;
  inverseSubtitle: string;
}

export interface StatusBarData {
  carrier: string;
  time: string;
  batteryPercentage: number;
  signalStrength: number;
}

// Props interface
export interface DebitCardScreenProps {
  // cardData?: CardData;
  // onTopUp?: () => void;
  // onSetSpendingLimit?: () => void;
  // onFreezeCard?: () => void;
  // onNavigate?: (screen: string) => void;
}

export interface SelectSpendingLimitProps {

}

// Navigation types
export type RootStackParamList = {
  DebitCard: undefined;
  SpendingLimit: undefined;
};

export type SpendingLimitScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SpendingLimit'
>;

// Component props interface
export interface SpendingLimitScreenProps {
  currentLimit?: number;
  onSaveLimit?: (limit: number) => void;
}

// Spending limit option interface
export interface SpendingLimitOption {
  id: string;
  amount: number;
  displayText: string;
}