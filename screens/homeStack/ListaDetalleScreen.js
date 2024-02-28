import { useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../components/ListaContent";

const TweetDetailScreen = () => {
  const {
    params: { tweet },
  } = useRoute();
  return (
    
      <View testID="TweetDetailScreen" style={styles.row}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {

    width: 339,
    height: 120,
    borderRadius: 12, 
    backgroundColor: '#F8F8F8' ,
    shadowOffset: { width: 0, height: 20 }, 
    shadowOpacity: 0.5, 
    paddingRight: 3,
    elevation: 5,
    flex: 1,
  },
  row: {
    top: 10,
    marginBottom: 2,
    left: 5,
    flexDirection: "row",
    width: 350,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: "green",
  },
});

export default TweetDetailScreen;
