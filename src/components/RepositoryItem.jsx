import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import StyledText from "./styledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = props => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: -10, justifyContent: "center" }}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText color="primary">Description: {props.description} </StyledText>
      <StyledText style={styles.language}> {props.language} </StyledText>
    </View>
  </View>
);

const RepositoryItem = props => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 35,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
});

export default RepositoryItem;
