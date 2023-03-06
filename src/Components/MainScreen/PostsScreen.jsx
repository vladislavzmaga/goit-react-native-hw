import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { Header } from "../header";
import { User } from "../user";
import { Publication } from "../publications";
import { Login } from "../LoginScreen/LoginScreen";

import photo1 from "../../../assets/img/post_1.png";
import photo2 from "../../../assets/img/post_2.png";

export const PostsScreen = ({}) => {
  return (
    <View style={styles.container}>
      {/* <Header title="Публікaції" out={true} /> */}
      <ScrollView style={styles.main}>
        <User />
        <Publication
          title={"Ліс"}
          image={photo1}
          comments={0}
          location={`Ivano-Frankivs'k Region, Ukraine`}
        />

        <Publication
          title={"Чорне море"}
          image={photo2}
          comments={0}
          location={"Odessa, Ukraine"}
        />

        {/* {posts.map(({ id, image, title, comments, location }) =>
					<Publication key={id} title={title}
						image={image}
						coments={comments}
						location={location} />)} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
});
