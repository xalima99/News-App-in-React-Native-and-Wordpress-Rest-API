import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import WideCard from '../card/WideCard';
import colors from '../../config/colors';
import { useNavigation } from "@react-navigation/native";



  
  const WideList = ({data}) => {
    const navigation = useNavigation();
    return (
      <>
        <View style={{ backgroundColor: colors.gray, padding:15 }}>
          {data.map(item => {
              return (
                  <WideCard  image={item.image}
              date={item.date}
              title={item.title}
              onPress={() => navigation.push("post", {screen: 'post', params: item})} key={item.id} />
              )
          })}
        </View>
      </>
    );
  };

export default WideList

const styles = StyleSheet.create({})
