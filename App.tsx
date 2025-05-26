import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DebitCardScreen from "./screens/DebitCardModule/DebitCardScreen/DebitCardScreen";
import { View, StatusBar } from "react-native";
import colors from "./common/theme/color";
import DashboardTabbar from "./screens/Tabbar";
import SelectSpendingLimit from "./screens/DebitCardModule/SelectSpendingLimit/SelectSpendingLimit";
import { Ionicons } from "@expo/vector-icons";
import selectSpendingLimitScreenStyles from "./screens/DebitCardModule/SelectSpendingLimit/SelectSpendingLimit.style";

const Stack = createStackNavigator();

export function storeApp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.backgroundLight}
          barStyle="dark-content"
        />
        <Stack.Navigator
          initialRouteName="DashboardTabbar"
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            options={() => {
              return {
                headerShown: false,
              };
            }}
            name="DashboardTabbar"
            component={DashboardTabbar}
          />
          <Stack.Screen
            options={() => {
              return {
                headerShown: false,
                // title: "",
                // headerTintColor: colors.backgroundLight,
                // headerStyle: {
                //     backgroundColor: colors.backgroundDark,
                //     shadowOpacity: 0,
                //     elevation: 0
                //   },
                //   headerRight: () => (
                //     <View style={selectSpendingLimitScreenStyles.logoContainer}>
                //       <View style={selectSpendingLimitScreenStyles.logo}>
                //         <Ionicons name="chevron-up" size={20} color="white" />
                //       </View>
                //     </View>
                //   )
              };
            }}
            name="SelectSpendingLimit"
            component={SelectSpendingLimit}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default storeApp;
