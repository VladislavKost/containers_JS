import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WordsScreen from "../screens/WordsScreen";

// screen names
const homeName = "Home"
const wordsName = "Words"
const profileName = "Profile"

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="homeName"
      screenOptions={(route) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline'
            } else if  (rn === wordsName) {
                iconName = focused ? 'list' : 'list-outline'
            } else if  (rn === profileName) {
                iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}
      >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={wordsName} component={WordsScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

