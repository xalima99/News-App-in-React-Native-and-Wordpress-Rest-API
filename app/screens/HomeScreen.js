import React from "react";
import { StyleSheet} from "react-native";

import Screen from "../components/common/Screen";
import CoverList from "../components/list/CoverList";
import { ScrollView } from "react-native-gesture-handler";
import FlatListing from "../components/list/FlatListing";

import usePosts from "../components/hooks/usePosts";


const Home = () => {
  const { allposts, alaUne } = usePosts();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen>
        <CoverList data={alaUne} />
        <FlatListing data={allposts} />
      </Screen>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
