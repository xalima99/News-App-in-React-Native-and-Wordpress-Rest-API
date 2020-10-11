import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children, numberOfLines = 2, size = 17, style }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[{ fontWeight: "bold", fontSize: size }, style]}
    >
      {children}
    </Text>
  );
};

export default Title;
