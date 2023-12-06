import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./styledText";

const RepositoryItem = props => (
  <View key={props.id} style={styles.container}>
    <StyledText big bold blue>
      ID {props.id}{" "}
    </StyledText>
    <StyledText bold>FullName: {props.fullName} </StyledText>
    <StyledText small>Description: {props.description} </StyledText>
    <StyledText small>Language: {props.language} </StyledText>
    <StyledText small>Stargazers: {props.stargazersCount} </StyledText>
    <StyledText small>Forks: {props.forksCount} </StyledText>
    <StyledText small>Review: {props.reviewCount} </StyledText>
    <StyledText small>Rating: {props.ratingAverage} </StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
