import React,{useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import Screen from "../components/common/Screen";
import Title from "../components/common/Title";
import colors from "../config/colors";
import HTML from "react-native-render-html";
import useCatgeories from "../components/hooks/useCatgeories";
import WideCard from "../components/card/WideCard";
import HeadLine from "../components/common/HeadLine";
import Close from "../components/common/Close";

const { height, width } = Dimensions.get("window");

const SinglePostScreen = ({ route, navigation }) => {
  const {
    author,
    data,
    description,
    id,
    image,
    title,
    categories,
  } = route.params;
  const { alaUne } = useCatgeories(categories, "5");
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if(alaUne){
      setrelated(alaUne.filter(item => item.id !== id))
    }
  }, [alaUne]);

  let htmltextwidthModifiedMediaSize = description.replace(
    /(width=")\d+("\W+height=")\d+/g,
    `$1350$2${width}`
  );
  return (
    <Screen>
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Container}>
            {image && <Image style={styles.Image} source={{ uri: image }} />}
            <View style={styles.content}>
              <Title size={23} style={styles.title} numberOfLines={5}>
                {title}
              </Title>
              <View
                styles={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HTML
                  html={htmltextwidthModifiedMediaSize}
                  contentWidth={width}
                />
              </View>
            </View>
          </View>
          <HeadLine style={{ alignSelf: "center" }}>
            Articles Similaires
          </HeadLine>
          {alaUne &&
            related.map((post) => {
              return (
                <WideCard
                  key={post.id}
                  categories={post.categories}
                  image={post.image}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  excerpt={post.excerpt}
                  onPress={() => navigation.push("post", post)}
                />
              );
            })}
        </ScrollView>
        <Close onPress={() => navigation.popToTop()}/>
      </>
    </Screen>
  );
};

export default SinglePostScreen;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: colors.white,
  },
  Image: {
    width: "100%",
    height: height / 2.8,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 15,
    alignItems: "flex-start",
    backgroundColor: colors.white,
    top: -35,
  },
  title: {
    marginVertical: 15,
  },
});
