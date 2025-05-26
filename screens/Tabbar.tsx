import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

// Import screens
import HomeScreen from "../screens/HomeModule/HomeScreen";
import DebitCardScreen from "./DebitCardModule/DebitCardScreen/DebitCardScreen";
import PaymentsScreen from "../screens/PaymentsModule/PaymentsScreen";
import CreditScreen from "../screens/CreditModule/CreditScreen";
import ProfileScreen from "../screens/ProfileModule/ProfileScreen";

// Navigation types
export type TabParamList = {
  Home: undefined;
  DebitCard: undefined;
  Payments: undefined;
  Credit: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface TabBarLabelProps {
  focused: boolean;
  color: string;
  children: string;
}

const TabBarIcon: React.FC<
  TabBarIconProps & { name: keyof typeof Ionicons.glyphMap }
> = ({ focused, color, size, name }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const TabBarLabel: React.FC<TabBarLabelProps> = ({
  focused,
  color,
  children,
}) => {
  return (
    <Text
      style={[styles.tabLabel, { color, fontWeight: focused ? "600" : "400" }]}
    >
      {children}
    </Text>
  );
};

const DashboardTabbar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="DebitCard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              name={props.focused ? "home" : "home-outline"}
            />
          ),
          tabBarLabel: (props) => <TabBarLabel {...props}>Home</TabBarLabel>,
        }}
      />
      <Tab.Screen
        name="DebitCard"
        component={DebitCardScreen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              name={props.focused ? "card" : "card-outline"}
            />
          ),
          tabBarLabel: (props) => (
            <TabBarLabel {...props}>Debit Card</TabBarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              name={props.focused ? "remove-circle" : "remove-circle-outline"}
            />
          ),
          tabBarLabel: (props) => (
            <TabBarLabel {...props}>Payments</TabBarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={CreditScreen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              name={props.focused ? "arrow-up" : "arrow-up-outline"}
            />
          ),
          tabBarLabel: (props) => <TabBarLabel {...props}>Credit</TabBarLabel>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              {...props}
              name={props.focused ? "person" : "person-outline"}
            />
          ),
          tabBarLabel: (props) => <TabBarLabel {...props}>Profile</TabBarLabel>,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
    paddingTop: 8,
    paddingBottom: 8,
    height: 84,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default DashboardTabbar;
