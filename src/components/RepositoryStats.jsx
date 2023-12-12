import React from "react";
import { View } from "react-native";
import StyledText from "./styledText";

const parseThousands = value => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText fontWeight="bold">Stars: </StyledText>
        <StyledText> {parseThousands(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Forks: </StyledText>
        <StyledText>{parseThousands(props.forksCount)} </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Review: </StyledText>
        <StyledText> {props.reviewCount} </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Rating: </StyledText>
        <StyledText>{props.ratingAverage} </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
