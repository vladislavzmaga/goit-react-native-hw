import { StyleSheet, TextInput, Text, View } from "react-native";

export const RegistrationForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    // fontWeight: 500,
    marginTop: 92,
    marginBottom: 33,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
