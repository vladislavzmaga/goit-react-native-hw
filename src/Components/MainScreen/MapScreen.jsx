import { StyleSheet, Text, View } from "react-native";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#000",
  },
});
