import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Account from "../Screens/Account";
import Dashboard from "../Screens/Dashboard";

import Icon from "../Components/Icon";
import { useTheme } from "styled-components/native";

export default function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const theme = useTheme();

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderTopWidth: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      },

      elevation: 0,
    },
    tabBarActiveTintColor: theme.colors.blue,
    tabBarInactiveTintColor: theme.colors.gray_400,
  };

  return (
    <Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: "#f9f9f9" }}
    >
      <Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon iconName="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        component={Account}
        name="Account"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon iconName="user" size={size} color={color} />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon iconName="profile" size={size} color={color} />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        component={Dashboard}
        name="dashboard"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon iconName="dashboard" size={size} color={color} />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Navigator>
  );
}
