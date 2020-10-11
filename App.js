import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/common/Screen";
import AppNavigator from "./app/navigation/AppNavigator";
import theme from "./app/config/theme";

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
