import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import Buzz from '../components/Buzz';
import Video from '../components/Video';
import Politic from '../components/Politic';
import { Text } from "react-native";
import Actualit from '../components/Actualités';
import Foot from '../components/Foot';
import Justice from '../components/Justice';
import Soci from '../components/Société';
import Lutte from '../components/Lutte';
import Beaut from '../components/Beauté';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{scrollEnabled:true,tabStyle: { width: 100 },}} lazy lazyPlaceholder={() => <Text style={{zIndex:10, alignSelf:'center', justifyContent:'center', fontSize:1, flex:1}}>Loading...</Text>}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Buzz" component={Buzz} />
      <Tab.Screen name="Videos" component={Video} />
      <Tab.Screen name="News" component={Actualit} />
      <Tab.Screen name="Foot" component={Foot} />
      <Tab.Screen name="Lutte" component={Lutte} />
      <Tab.Screen name="Société" component={Soci} />
      <Tab.Screen name="Justice" component={Justice} />
      <Tab.Screen name="Politique" component={Politic} />
      <Tab.Screen name="Beauté" component={Beaut} />
    </Tab.Navigator>
  );
}

export default MyTabs;
