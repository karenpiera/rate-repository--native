import React from "react";
import { View, Image } from "react-native";
import StyledText from "./styledText";

function RepositoryItemHeader(props) {
  return (
    <View>
      <Image
        style={{
          width: 48,
          height: 48,
          borderRadius: 5,
        }}
        source={{ uri: props.ownerAvatarUrl }}
      />
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}{" "}
      </StyledText>
      <StyledText>Description: {props.description} </StyledText>
      <StyledText style={styles.language}> {props.language} </StyledText>
    </View>
  );
}

export default RepositoryItemHeader;
