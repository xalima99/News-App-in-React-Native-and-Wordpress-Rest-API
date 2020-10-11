import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../config/colors";
import HeadLine from "../common/HeadLine";

import { useNavigation } from "@react-navigation/native";
import HaldCard from '../card/HaldCard';

const HalfList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <>
      <HeadLine name="newspaper">À la une</HeadLine>
      <View style={{ backgroundColor: colors.white }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <HaldCard
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
              excerpt={item.excerpt}
              onPress={() => navigation.navigate("post", {screen: 'post', params: item})}
            />
          }}
        />
      </View>
    </>
  );
};

export default HalfList;

const styles = StyleSheet.create({});
