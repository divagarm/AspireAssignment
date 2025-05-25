import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Sizes from '../../../common/theme/size';
import { moderateScale } from 'react-native-size-matters';
import { font } from '../../../common/theme/font';
import colors from '../../../common/theme/color';

// Styles with proper typing
interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  statusBar: ViewStyle;
  leftStatus: ViewStyle;
  signalBars: ViewStyle;
  bar: ViewStyle;
  carrier: TextStyle;
  time: TextStyle;
  rightStatus: ViewStyle;
  battery: TextStyle;
  batteryIcon: ViewStyle;
  batteryFill: ViewStyle;
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
  cardContainer: ViewStyle;
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
}

const debitCardScreenStyles = StyleSheet.create<Styles>({
  topSafeAreaView: {
    backgroundColor: '#0C365A'
  },
  bottomSafeAreaView:{
    flex: 1,
    backgroundColor: colors.backgroundLight
  },
  bottomContainer:{
    zIndex: 10,
    backgroundColor: colors.backgroundLight
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  carrier: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  rightStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  battery: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  batteryIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    padding: 1,
  },
  batteryFill: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    backgroundColor: '#01D167',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  currencyBadge: {
    backgroundColor: '#01D167',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  currencyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  showCardContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  showCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    gap: 6
  },
  showCardText: {
    color: '#01D167',
    fontSize: 12,
    fontWeight: '500',
  },
  cardAbsoluteContainer: {
    justifyContent:'flex-end', 
    position:"absolute", 
    height: '100%', 
    width: '100%'
  },
  cardAbsoluteWhiteContainer: {
    backgroundColor: 'white', 
    height: '70%', 
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  card: {
    backgroundColor: '#01D167',
    borderRadius: 16,
    padding: 20,
    height: 200,
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  aspireLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  aspireLogo: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aspireText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardholderName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardNumberContainer: {
    marginTop: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  cardLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  visaContainer: {
    alignItems: 'flex-end',
  },
  visaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  limitContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    width: '100%'
  },
  limitHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  limitAmount:{
    flexDirection: 'row'
  },
  balanceCurrency:{
    color: "#01D167"
  },
  limitCurrency:{
    color: "#22222233"
  },
  progressBarContainer: {
    width: "100%", 
    height: 15, 
    backgroundColor: '#E8F5E8', 
    marginVertical: 10, 
    borderRadius: 10
  },
  progressBarFill: {
    height: '100%', 
    backgroundColor: '#01D167', 
    borderRadius: 10
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginVertical: 30,
    gap: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  menuIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#4A6FA5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    color: '#25345F',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  menuSubtitle: {
    color: '#B0C4DE',
    fontSize: 13,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    marginTop: 'auto',
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 10,
    color: '#8E8E93',
  },
  activeNavText: {
    color: '#01D167',
  },
});

export default debitCardScreenStyles;
