import { CardData, MenuItemData } from "./TypeConstants";

export const cardData: CardData = {
    holderName: 'Mark Henry',
    cardNumber: '5647893214567890',
    expiryDate: '12/20',
    cvv: '123',
    balance: 3000,
    currency: 'S$',
  }

export const menuItems: MenuItemData[] = [
    {
      id: 'topup',
      title: 'Top-up account',
      subtitle: 'Deposit money to your account to use with card',
      icon: "download-outline",
      iconLibrary: 'Ionicons',
      toggleable: false,
      inverseTitle: '',
      inverseSubtitle: "",
    },
    {
      id: 'weeklySpendLimit',
      title: 'Weekly spending limit',
      subtitle: "You haven't set any spending limit on card",
      icon: "pie-chart",
      iconLibrary: 'MaterialIcons',
      toggleable: true,
      inverseTitle: 'Weekly spending limit',
      inverseSubtitle: "Your weekly spending limit is S$ ",
    },
    {
      id: 'freezeCard',
      title: 'Freeze card',
      subtitle: 'Your debit card is currently active',
      icon: "snow-outline",
      iconLibrary: 'Ionicons',
      toggleable: true,
      inverseTitle: 'UnFreeze card',
      inverseSubtitle: "Your debit card is currently in-active",
    },
    {
      id: 'getNewCard',
      title: 'Get a new card',
      subtitle: 'This deactivates your current debit card',
      icon: "card",
      iconLibrary: 'Ionicons',
      toggleable: false,
      inverseTitle: '',
      inverseSubtitle: "",
    },
    {
      id: 'deactivatedCard',
      title: 'Deactivated cards',
      subtitle: 'Your previously deactivated cards',
      icon: "remove-circle",
      iconLibrary: 'Ionicons',
      toggleable: false,
      inverseTitle: '',
      inverseSubtitle: "",
    }
  ];

  export const formatCardNumber = (number: string, masked: boolean = true): string => {
    if (masked) {
      return `•••• •••• •••• ${number?.slice(-4)}`;
    }
    return number?.replace(/(.{4})/g, '$1 ')?.trim();
  };