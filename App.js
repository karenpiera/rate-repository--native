import {
  Alert,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Alert.alert("toque texto")}>
        <Text>chau mundo!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
