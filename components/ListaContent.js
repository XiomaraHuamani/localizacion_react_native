import React from "react";
//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet, View, Image, Text, useColorScheme } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const tweetActions = (calificacion, distancia, costo) => {
  const theme = useColorScheme();
  return (
    <View style={[styles.rowActions, styles.actionBar]}>

      <View style={styles.elemAction}>
        <MaterialIcons
          style={styles.actionButton}
          name="star"
          size={21}
          color="#ffd700"
        />
        <Text style={styles.actionText}>{calificacion}</Text>
      </View>

      <View style={styles.elemAction}>
        <Text style={[styles.actionText]}>•{distancia}</Text>
      </View>

      <View style={styles.elemAction}>
        <Text style={styles.actionText}>•{costo}</Text>
      </View>
      
    </View>
  );
};

const avatar = (author) => {
  const imageUrl = author.avatar.replace("_normal", "");
  return <Image style={styles.avatar} source={{ uri: imageUrl }} />;
};

const GrayText = ({ children, numberOfLines, style }) => {
  return (
    <Text style={[style, styles.gray]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const TweetContent = ({ tweet }) => {
  const theme = useColorScheme();
  return (
    <React.Fragment>
    
    <View style={styles.singleItem}>
      <View style={styles.row}>
      {avatar(tweet.author)}
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text
              numberOfLines={1}
              style={[
                styles.header,
                { color: theme === "dark" ? "#FFF" : "#000" },
              ]}
            >
              {tweet.author.name}
            </Text>
          </View>
          <Text
            style={[
              styles.description,
              { color: 'gray' },
            ]}
          >
            {tweet.author.descripcion}
          </Text>
          <View style={styles.rowActions}>
            {tweetActions(
              tweet.calificacion,
              tweet.distancia,
              tweet.costo
            )}
          </View>
        </View>
      </View>
    </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 15,
    justifyContent: "space-between",
    marginRight: 16,
    
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 5,
    
  },
  gray: {
    color: "#777",
    fontSize: 13,
    paddingRight: 0,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 12,
    marginRight: 23,
    //flexShrink: 0,
    //marginTop: 4,
  },
  header: {
    fontSize: 18,
    //fontWeight: "bold",
    paddingBottom: 8,
    paddingRight: 4,
    color: "#000",
    paddingTop: 13,
  },
  description: {
    fontSize: 15,
  },
  singleItem: {
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
  rowTop: {
    flexDirection: "row",
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 6,
    paddingBottom: 13,
    //backgroundColor: 'red',
  },
  row: {
    flexDirection: "row",
    //backgroundColor: "green",
  },
  elemAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    //backgroundColor: "red",
  },
  actionText: {
    fontSize: 13,
    color: "#444",
    
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
  
});

export default TweetContent;
