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
  icon: any;
}

export interface StatusBarData {
  carrier: string;
  time: string;
  batteryPercentage: number;
  signalStrength: number;
}

// Props interface
export interface DebitCardScreenProps {
  cardData?: CardData;
  onTopUp?: () => void;
  onSetSpendingLimit?: () => void;
  onFreezeCard?: () => void;
  onNavigate?: (screen: string) => void;
}