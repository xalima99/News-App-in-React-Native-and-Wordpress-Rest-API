import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Title from "../common/Title";
import colors from "../../config/colors";
import Description from "../common/Description";
import { getCategory } from "../api/helpers";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const FlatCard = ({
  onPress,
  title,
  image,
  date,
  description,
  style,
  categories,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.categories}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 12,
              paddingHorizontal: 5,
            }}
          >
            {getCategory(categories)}
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.Image}
          source={{ uri: image }}
        />
        <View style={styles.content}>
          <Title>{title}</Title>
          <Description>{description.substring(3)}</Description>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  categories: {
    position: "absolute",
    top: 2,
    left: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    paddingVertical: 5,
    zIndex: 3,
    height: "10%",
    backgroundColor: colors.white,
  },
  container: {
    height: 300,
    width: "100%",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom:10
  },
  Image: {
    height: 200,
    width: "100%",
  },
  content: {
    padding: 10,
  },
});
