import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const sizes = {
  // Font Sizes
  smallText: moderateScale(12),
  regularText: moderateScale(14),
  mediumText: moderateScale(18),
  largeText: moderateScale(20),
  titleText: moderateScale(24),
  headerText: moderateScale(28),

  // Padding & Margin
  smallPadding: scale(8),
  regularPadding: scale(12),
  mediumPadding: scale(16),
  largePadding: scale(20),

  smallMargin: scale(8),
  regularMargin: scale(12),
  mediumMargin: scale(16),
  largeMargin: scale(20),

  // Button & Icon Sizes
  smallButton: scale(36),
  regularButton: scale(48),
  largeButton: scale(56),

  smallIcon: scale(20),
  regularIcon: scale(24),
  largeIcon: scale(32),

  // Border Radius
  smallRadius: scale(4),
  regularRadius: scale(8),
  mediumRadius: scale(12),
  largeRadius: scale(16),

  // Heights & Widths
  inputHeight: verticalScale(40),
  buttonHeight: verticalScale(60),
  cardHeight: verticalScale(100),
  fullWidth: "100%",
};

export default sizes;
