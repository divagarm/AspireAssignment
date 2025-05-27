export const fetchCreditCardDataAPI = async () => {
  // make the API call to fetch credit card data

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          id: 1,
          holderName: "Mark Henry",
          cardNumber: "5647893214567890",
          expiryDate: "12/20",
          cvv: "123",
          balance: 3000,
          currency: "S$",
          weeklySpendLimit: { enabled: false, limit: 0 },
          freezeCard: { enabled: false },
        },
      });
    }, 5000);
  });
};
