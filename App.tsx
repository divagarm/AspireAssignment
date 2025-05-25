
import { Provider} from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DebitCardScreen from "./screens/DebitCardModule/DebitCardScreen";
import { StatusBar } from "react-native";
import colors from "./common/theme/color";
import TabNavigator from "./screens/Tabbar";

const Stack = createStackNavigator();

export function storeApp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StatusBar backgroundColor={colors.backgroundLight} barStyle="dark-content" />
        <TabNavigator />
    </NavigationContainer>
    </Provider>
  );
}

export default storeApp;
