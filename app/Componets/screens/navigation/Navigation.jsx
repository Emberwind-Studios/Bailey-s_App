import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quizzes from "../Quizzes";
import HomeScreen from "../HomeScreen";

function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quizzes" component={Quizzes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
