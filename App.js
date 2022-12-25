import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RegistrationForm } from "./src/Components/RegistrationScreen/RegistrationScreen.jsx";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { LoginForm } from "./src/Components/LoginScreen/LoginScreen.jsx";
const image = require("./assets/img/Photo-BG.jpg");

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onShowKeyboard = () => {
    setIsShowKeyboard(true);
  };

  const onHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <KeyboardAvoidingView behavior="ios ? padding : height">
            <RegistrationForm
              isShowKeyboard={isShowKeyboard}
              showKeyboard={onShowKeyboard}
              hideKeyboard={onHideKeyboard}
            />
            {/* <LoginForm
              isShowKeyboard={isShowKeyboard}
              showKeyboard={onShowKeyboard}
              hideKeyboard={onHideKeyboard}
            /> */}

            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
