import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FlatCard from "../card/FlatCard";
import colors from "../../config/colors";
import Title from "../common/Title";
import HeadLine from "../common/HeadLine";
import { useNavigation } from "@react-navigation/native";

const Categories = [
  { name: "Home" },
  { name: "Buzz" },
  { name: "Videos" },
  { name: "Politics" },
];

const FlatListing = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      <HeadLine name="flash-red-eye">Selectionné pour vous</HeadLine>
      <View
        style={{
         
          alignItems: "center",
          justifyContent:'center',
          marginHorizontal: 20
        }}
      >
        {data.map((item) => {
          return (
            <FlatCard
              key={item.id}
              categories={item.categories}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
              excerpt={item.excerpt}
              onPress={() =>
                navigation.navigate("post", { screen: "post", params: item })
              }
            />
          );
        })}
      </View>
    </>
  );
};

export default FlatListing;

const styles = StyleSheet.create({});
