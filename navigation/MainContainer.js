import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WordsScreen from "../screens/WordsScreen";

// screen names
const homeName = "Home";
const wordsName = "Words";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="homeName"
        screenOptions={() => ({
          tabBarActiveTintColor: "#f4511e",
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name={wordsName}
          component={WordsScreen}
          options={{
            tabBarLabel: "Words",
            tabBarIcon: ({ focused, color, size }) => {
              iconName = focused
                ? "extension-puzzle"
                : "extension-puzzle-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => {
              iconName = focused ? "person-circle" : "person-circle-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
