import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Title from "../common/Title";
import colors from "../../config/colors";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const CoverCard = ({onPress, title, image,date}) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.Image}
          source={{uri: image}}
        />
        <View style={styles.content}>
          <Title numberOfLines={3} style={styles.title}>
            {title}
          </Title>
          <Text style={{ color: "#fff", marginTop:5 }}>{date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CoverCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width / 3,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
    borderColor:colors.primary,
    borderWidth:2
  },
  Image: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 2,
  },
  content: {
    color: colors.white,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    zIndex: 3,
    height: "40%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    color: colors.white,
    fontWeight: "800",
  },
});
