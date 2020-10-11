import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WideList from "./list/WideList";
import useCatgeories from "./hooks/useCatgeories";
import { ScrollView } from "react-native";

const Actualité = () => {
  const { alaUne } = useCatgeories("2329", "15");
  // console.log(alaUne)
  return (
    <ScrollView>
      <WideList data={alaUne} />
    </ScrollView>
  );
};

export default Actualité;

const styles = StyleSheet.create({});
