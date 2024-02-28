import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import TweetContent from "./ListaContent";

const Tweet = ({ tweet }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailScreen", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

export default Tweet;
