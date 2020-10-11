import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WideList from "./list/WideList";
import useCatgeories from "./hooks/useCatgeories";
import { ScrollView } from "react-native";

const Société = () => {
  const { alaUne } = useCatgeories("6",'15');
  // console.log(alaUne)
  return (
    <ScrollView>
      <WideList data={alaUne} />
    </ScrollView>
  );
};

export default Société;

const styles = StyleSheet.create({});

