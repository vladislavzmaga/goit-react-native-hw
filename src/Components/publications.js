import { StyleSheet, Image, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const Publication = ({ title, image, comments, location }) => {
  return (
    <View style={styles.publication}>
      <Image style={styles.img} source={image} />
      <Text style={styles.publicationTitle}>{title}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={styles.comments}>
          <EvilIcons name="comment" size={24} color="#212121" />
          {comments}
        </Text>
        <Text style={styles.location}>
          <EvilIcons name="location" size={24} color="#212121" />
          {location}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  publication: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 35,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  publicationTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginTop: 8,
    color: "#212121",
  },
  comments: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#BDBDBD",
  },
  location: {
    fontFamily: "Roboto",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
