import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Title from "../common/Title";
import Description from "../common/Description";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const HaldCard = ({ onPress, title, image, date, description }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={styles.Image}
            source={{ uri: image }}
          />
          <View style={styles.content}>
            <Title size={20} numberOfLines={8}>
              {title}
            </Title>


          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HaldCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 220,
    padding: 10,
    justifyContent: "space-between",
    width: width,
  },
  Image: {
    height: "100%",
    width: "45%",
    borderRadius: 15,
  },
  content: {
    marginHorizontal: 9,
    width: "55%",
    padding: 5,
  },
});
