import { StyleSheet, Text, View } from "react-native";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CommentsScreen</Text>
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
