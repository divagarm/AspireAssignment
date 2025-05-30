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

export interface TNavigation {
  navigate: (screen: string, payload: object) => void;
  goBack: () => void;
  popToTop: () => void;
}

// Props interface
export interface DebitCardScreenProps {
  navigation: TNavigation;
}

export interface SelectSpendingLimitProps {
  route: {
    params?: {
      cardDetails?: DebitCardFormat;
    };
  };
  navigation: StackNavigationProp<RootStackParamList, "SpendingLimit">;
}

// Navigation types
export type RootStackParamList = {
  DebitCard: undefined;
  SpendingLimit: undefined;
};

export type SpendingLimitScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SpendingLimit"
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

export interface DebitCardFormat {
  id: number;
  holderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  balance: number;
  currency: string;
  weeklySpendLimit: { enabled: boolean; limit: number };
  freezeCard: { enabled: boolean };
}

export type DebitCardModuleType = {
  debitCardData: DebitCardFormat[];
};

export interface AddNewCardModalProps {
  addNewCardModalVisible: boolean;
  setAddNewCardModalVisible: (visible: boolean) => void;
}
