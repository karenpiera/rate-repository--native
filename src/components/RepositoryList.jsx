import { Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import React from "react";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
}

export default RepositoryList;
