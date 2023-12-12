import { Text, View } from "react-native";
import Constants from "expo-constants";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Main</Text>
      <AppBar />
      <RepositoryList />
    </View>
  );
}

export default Main;
