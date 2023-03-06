// import { StyleSheet, Text, View } from "react-native";

// export const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>ProfileScreen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 25,
//     color: "#000",
//   },
// });

// //////

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";

import { Publication } from "../publications";
import { PostsScreen } from "../MainScreen/PostsScreen";

import photo1 from "../../../assets/img/post_1.png";
import photo2 from "../../../assets/img/post_2.png";
import photo3 from "../../../assets/img/post_3.png";

const POSTS = [
  {
    id: "45k6-j54k-4jth",
    title: "Dnipro",
    image: "../../assets/images/post_2.png",
    comments: "",
    location: "Dnipro, Ukraine",
  },
  {
    id: "4116-jfk5-43rh",
    title: "Poltava",
    image: "../../assets/images/post_1.png",
    comments: "",
    location: "Poltava, Ukraine",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "Kyiv",
    image: "../../assets/images/post_3.png",
    comments: "",
    location: "Kyiv, Ukraine",
  },
  {
    id: "LG16-ant5-0J25",
    title: "Lviv",
    image: "../../assets/images/post_1.png",
    comments: "",
    location: "Lviv, Ukraine",
  },
];

export const ProfileScreen = ({}) => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={require("../../../assets/img/Photo-BG.jpg")}
      >
        <View style={styles.containerWhite}>
          <View style={styles.avatar}>
            <Image
              style={styles.img}
              source={require("../../../assets/img/avatar.png")}
            ></Image>
          </View>
          <Text style={styles.textUser}>Natali Romanova</Text>
          <ScrollView style={styles.main}>
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
            <Publication
              title={"Ліс"}
              image={photo3}
              comments={0}
              location={`Ivano-Frankivs'k Region, Ukraine`}
            />
          </ScrollView>
        </View>

        {/* <ScrollView></ScrollView> */}

        {/* <SafeAreaView style={styles.main}>
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => {
                            <Publication
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                comments={item.comments}
                                location={item.location}
                            />;
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>*/}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    lineHeight: 19,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textUser: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  containerWhite: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    bottom: 0,
    marginTop: 147,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
  },
  avatar: {
    alignItems: "center",
    marginBottom: 92,
  },
  img: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
