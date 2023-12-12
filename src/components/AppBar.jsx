import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./styledText";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

export default function AppBar() {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        REposytory
      </StyledText>
    </View>
  );
}
