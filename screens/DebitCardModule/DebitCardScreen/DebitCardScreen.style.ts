import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../../common/theme/color";

// Styles with proper typing
interface Styles {
  topSafeAreaView: ViewStyle;
  bottomSafeAreaView: ViewStyle;
  bottomContainer: ViewStyle;
  header: ViewStyle;
  headerContent: ViewStyle;
  headerTitle: TextStyle;
  logoContainer: ViewStyle;
  logo: ViewStyle;
  balanceSection: ViewStyle;
  balanceLabel: TextStyle;
  balanceContainer: ViewStyle;
  currencyBadge: ViewStyle;
  currencyText: TextStyle;
  balanceAmount: TextStyle;
  showCardContainer: ViewStyle;
  showCardButton: ViewStyle;
  showCardText: TextStyle;
  cardAbsoluteContainer: ViewStyle;
  cardAbsoluteWhiteContainer: ViewStyle;
  card: ViewStyle;
  cardHeader: ViewStyle;
  aspireLogoContainer: ViewStyle;
  aspireLogo: ViewStyle;
  aspireText: TextStyle;
  cardholderName: TextStyle;
  cardNumberContainer: ViewStyle;
  cardNumber: TextStyle;
  cardFooter: ViewStyle;
  cardLabel: TextStyle;
  visaContainer: ViewStyle;
  visaText: TextStyle;
  limitContainer: ViewStyle;
  limitHeader: ViewStyle;
  limitAmount: ViewStyle;
  balanceCurrency: TextStyle;
  seperationStyle: ViewStyle;
  limitCurrency: TextStyle;
  progressBarContainer: ViewStyle;
  progressBarFill: ViewStyle;
  menuContainer: ViewStyle;
  menuItem: ViewStyle;
  menuIcon: ViewStyle;
  menuTextContainer: ViewStyle;
  menuTitle: TextStyle;
  menuSubtitle: TextStyle;
  bottomNav: ViewStyle;
  navItem: ViewStyle;
  navText: TextStyle;
  activeNavText: TextStyle;
  paginationContainerStyle: ViewStyle;
  paginationDotStyle: ViewStyle;
}

const debitCardScreenStyles = StyleSheet.create<Styles>({
  topSafeAreaView: {
    backgroundColor: "#0C365A",
  },
  bottomSafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  bottomContainer: {
    zIndex: 10,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "AvenirNextLTProIt",
  },
  logoContainer: {
    alignItems: "center",
  },
  balanceSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  balanceLabel: {
    color: "white",
    fontSize: 14,
    marginBottom: 8,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  currencyBadge: {
    backgroundColor: "#01D167",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  currencyText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  showCardContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  showCardButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    gap: 6,
  },
  showCardText: {
    color: "#01D167",
    fontSize: 12,
    fontWeight: "500",
  },
  cardAbsoluteContainer: {
    justifyContent: "flex-end",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  cardAbsoluteWhiteContainer: {
    backgroundColor: "white",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  card: {
    backgroundColor: "#01D167",
    borderRadius: 16,
    padding: 25,
    height: 220,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  cardholderName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  cardNumberContainer: {
    marginTop: 20,
  },
  cardNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  cardLabel: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginRight: 30,
  },
  visaContainer: {
    alignItems: "flex-end",
  },
  limitContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    width: "100%",
  },
  limitHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  limitAmount: {
    flexDirection: "row",
  },
  balanceCurrency: {
    color: "#01D167",
  },
  seperationStyle: {
    paddingHorizontal: 10,
  },
  limitCurrency: {
    color: "#22222233",
  },
  progressBarContainer: {
    width: "100%",
    height: 15,
    backgroundColor: "#E8F5E8",
    marginVertical: 10,
    borderRadius: 10,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#01D167",
    borderRadius: 10,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginVertical: 30,
    gap: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    color: "#25345F",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  menuSubtitle: {
    color: "#B0C4DE",
    fontSize: 13,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    marginTop: "auto",
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navText: {
    fontSize: 10,
    color: "#8E8E93",
  },
  activeNavText: {
    color: "#01D167",
  },
  paginationContainerStyle: {
    paddingVertical: 10,
  },
  paginationDotStyle: {
    backgroundColor: "#01D167",
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
  },
});

export default debitCardScreenStyles;
