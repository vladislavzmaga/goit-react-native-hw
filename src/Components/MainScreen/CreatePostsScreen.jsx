import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

import { Header } from "../header";
import { Login } from "../LoginScreen/LoginScreen";

export const CreatePostsScreen = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const keyBoardHide = () => {
    Keyboard.dismiss();
    setIsKeyboardShow(false);
  };
  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        {/* <Header title="Створити публікцію" /> */}
        <ScrollView style={styles.main}>
          <View
            style={{
              ...styles.form,
              marginBottom: isKeyboardShow ? 40 : 0,
            }}
          >
            <View style={styles.photoLayout}>
              <TouchableOpacity
                style={styles.photoLayoutBtn}
                activeOpacity={0.85}
                onPress={() => console.log("take a photo")}
              >
                <EvilIcons name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>

            <Text style={styles.downloadText}>Завантажити фото</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "margin" : "height"}
            >
              <View style={{ marginTop: 48 }}>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsKeyboardShow(true)}
                  placeholder="Назва"
                  keyboardType="default"
                />
              </View>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsKeyboardShow(true)}
                  placeholder="Місцевість"
                  keyboardType="default"
                />
              </View>
              <View>
                {/* //! ---------- Кнопка: Створити -------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={() => {
                    console.log("create post");
                  }}
                >
                  <Text style={styles.btnTitle}>Створити публікцію</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  photoLayout: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  photoLayoutBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  downloadText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,

    color: "#BDBDBD",
  },
  form: {},
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  btn: {
    height: 51,
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
