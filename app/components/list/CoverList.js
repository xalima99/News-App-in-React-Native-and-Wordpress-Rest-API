import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CoverCard from "../card/CoverCard";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../config/colors";
import HeadLine from "../common/HeadLine";

import { useNavigation } from "@react-navigation/native";

const CoverList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <>
      <HeadLine name="newspaper">À la une !</HeadLine>
      <View style={{ backgroundColor: colors.white }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CoverCard
              image={item.image}
              date={item.date}
              title={item.title}
              onPress={() => navigation.navigate("post", {screen: 'post', params: item})}
            />
          }}
        />
      </View>
    </>
  );
};

export default CoverList;

const styles = StyleSheet.create({});
