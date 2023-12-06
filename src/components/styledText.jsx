import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "green",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});
export default function StyledText({ blue, bold, children, big, small }) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
    blue && styles.blue,
  ];
  return <Text style={textStyles}>{children}</Text>;
}
