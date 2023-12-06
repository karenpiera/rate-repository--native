import { Text, View } from "react-native";
import Constants from "expo-constants";
import React from "react";
import RepositoryList from "./RepositoryList";

function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Main</Text>
      <RepositoryList />
    </View>
  );
}

export default Main;
