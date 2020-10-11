import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Title from "../common/Title";
import colors from "../../config/colors";

const HeadLine = ({ children, name,style }) => {
  return (
   
      <View style={[styles.container,style]}>
        {name && (
          <MaterialCommunityIcons
            name={name}
            size={22}
            color={colors.primary}
          />
        )}
        <Title size={20} style={styles.headline}>
          {children}
        </Title>
      </View>

  );
};

export default HeadLine;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 8,

   
  },
  headline: {
    margin: 5,
    color: colors.primary,
    fontWeight: "400",
  },
});
