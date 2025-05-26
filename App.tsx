import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import colors from "./common/theme/color";
import DashboardTabbar from "./screens/Tabbar";
import SelectSpendingLimit from "./screens/DebitCardModule/SelectSpendingLimit/SelectSpendingLimit";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

export function storeApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={colors.backgroundLight}
            barStyle="dark-content"
          />
          <Stack.Navigator initialRouteName="DashboardTabbar">
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
                };
              }}
              name="SelectSpendingLimit"
              component={SelectSpendingLimit}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default storeApp;
