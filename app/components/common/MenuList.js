import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Title from "../common/Title";
import colors from "../../config/colors";

const Categories = [
  { name: "Home" },
  { name: "Buzz" },
  { name: "Videos" },
  { name: "Politics" },
];

const MenuList = () => {
  return (
    <View style={{ width: "100%", backgroundColor: colors.white }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Categories}
        keyExtractor={(item) => item.name}
        horizontal
        renderItem={({ item }) => {
          return <Title style={styles.menu}>{item.name}</Title>;
        }}
      />
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  menu: {
    padding: 5,
    marginHorizontal: 8,
    fontWeight: "300",
  },
});
