import React from "react";
import {Platform} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SinglePostScreen from "../screens/SinglePostScreen";

const Stack = createStackNavigator();

function PostNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: "white",
        headerLeftContainerStyle:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'rgba(92,90,91,0.7)',
        alignItems: 'center',
        marginLeft:10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10,
        marginTop:5
      }
      }}
    >
      <Stack.Screen name="post" component={SinglePostScreen} />
    </Stack.Navigator>
  );
}

export default PostNavigator;
