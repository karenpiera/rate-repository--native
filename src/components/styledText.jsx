// import React from "react";
// import { Text, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 12,
//     color: "black",
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   blue: {
//     color: "blue",
//   },
//   big: {
//     fontSize: 20,
//   },
//   small: {
//     fontSize: 10,
//   },
// });
// export default function StyledText({ blue, bold, children, big, small }) {
//   const textStyles = [
//     styles.text,
//     bold && styles.bold,
//     big && styles.big,
//     small && styles.small,
//     blue && styles.blue,
//   ];
//   return <Text style={textStyles}>{children}</Text>;
// }

import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body, // Use the correct property name
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },

  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});
export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
