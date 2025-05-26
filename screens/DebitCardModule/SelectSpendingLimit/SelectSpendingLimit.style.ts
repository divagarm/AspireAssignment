import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../../common/theme/color";

// Add explicit types for each style property in the Styles interface
interface Styles {
  topSafeAreaView: ViewStyle;
  bottomSafeAreaView: ViewStyle;
  topContainer: ViewStyle;
  logoContainer: ViewStyle;
  logo: ViewStyle;
  header: ViewStyle;
  backButton: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  content: ViewStyle;
  contentHeader: ViewStyle;
  iconContainer: ViewStyle;
  contentTitle: TextStyle;
  currencyContainer: ViewStyle;
  currencyBadge: ViewStyle;
  currencyText: TextStyle;
  selectedLimitText: TextStyle;
  description: TextStyle;
  optionsContainer: ViewStyle;
  optionButton: ViewStyle;
  optionButtonSelected: ViewStyle;
  optionText: TextStyle;
  optionTextSelected: TextStyle;
  saveButtonContainer: ViewStyle;
  saveButton: ViewStyle;
  saveButtonEnabled: ViewStyle;
  saveButtonText: TextStyle;
  saveButtonTextEnabled: TextStyle;
}

const selectSpendingLimitScreenStyles = StyleSheet.create<Styles>({
  topSafeAreaView: {
    backgroundColor: "#0C365A",
  },
  bottomSafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  topContainer: {
    height: "30%",
    backgroundColor: colors.backgroundDark,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    width: 32,
    height: 32,
    backgroundColor: "#01D167",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    marginTop: "40%",
    zIndex: 10,
    height: "80%",
    backgroundColor: colors.backgroundLight,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  iconContainer: {
    marginRight: 12,
  },
  contentTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    lineHeight: 22,
  },
  currencyContainer: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  currencyBadge: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 12,
  },
  currencyText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedLimitText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
  },
  description: {
    fontSize: 14,
    color: "#999",
    lineHeight: 20,
    marginBottom: 32,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 60,
    gap: 12,
  },
  optionButton: {
    flex: 1,
    backgroundColor: "#E8F5E8",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionButtonSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
  optionTextSelected: {
    color: "white",
  },
  saveButtonContainer: {
    marginTop: "auto",
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  saveButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  saveButtonEnabled: {
    backgroundColor: "#4CAF50",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#999",
  },
  saveButtonTextEnabled: {
    color: "white",
  },
});

export default selectSpendingLimitScreenStyles;
