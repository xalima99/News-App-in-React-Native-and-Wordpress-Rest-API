import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../common/Title";
import colors from "../../config/colors";

import Description from "../common/Description";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const WideCard = ({ onPress, title, image, date, description }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.Image}
          source={{ uri: image }}
        />
        <View style={styles.content}>
          <Title>{title}</Title>
          <Description>
            Title is here and ther is no escapre Title is here and ther is no
            escapre Title is here and ther is no escapre Title is here and ther
            is no escapre
          </Description>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WideCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 15,
    overflow: "hidden",
    padding: 5,
    backgroundColor: colors.white,
  },
  Image: {
    height: "100%",
    width: "30%",
    borderRadius: 15,
  },
  content: {
    padding: 10,
    width: "70%",
  },
});
