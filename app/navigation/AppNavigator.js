import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import CategoryNavigator from "./CategoryNavigator";
import SinglePostScreen from "../screens/SinglePostScreen";
import PostNavigator from "./PostNavigator";

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator headerMode="screen" mode="modal">
      <Stack.Screen
        options={{
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitle: "SENEGALDIRECT",
          headerRight: () => (
            <AntDesign name="search1" size={25} color="black" />
          ),
          headerLeft: () => (
            <AntDesign name="menu-unfold" size={25} color="black" />
          ),
        }}
        name="Home"
        component={CategoryNavigator}
      />
      <Stack.Screen
        name="post"
        component={PostNavigator}
        options={{ headerShown:false}}
      />
    </Stack.Navigator>
  );
}

export default MyTabs;
