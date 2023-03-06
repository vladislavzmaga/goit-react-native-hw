import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SvgComponent } from "../SVG/SvgComponent.jsx";
const image = require("../../../assets/img/Photo-BG.jpg");

export const RegistrationForm = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const focusLoginInput = () => {
    setIsLoginFocus(true);
    setIsShowKeyboard(true);
  };

  const focusEmailInput = () => {
    setIsEmailFocus(true);
    setIsShowKeyboard(true);
  };

  const focusPasswordInput = () => {
    setIsPasswordFocus(true);
    setIsShowKeyboard(true);
  };

  const handleSubmit = () => {
    onHideKeyboard();
    const user = {
      login,
      email,
      password,
    };
    console.log(user);
    reset();
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={onHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <KeyboardAvoidingView behavior="ios ? padding : height">
            <View
              style={{
                ...styles.form,
                marginTop: isShowKeyboard ? 147 : "auto",
              }}
            >
              <View style={styles.avatarBox}>
                <TouchableOpacity
                  style={styles.addPhotoBtn}
                  activeOpacity={0.5}
                >
                  <SvgComponent />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <View>
                <TextInput
                  style={isLoginFocus ? styles.focusInput : styles.input}
                  placeholder={"Логин"}
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType={"default"}
                  cursorColor={"#212121"}
                  onFocus={focusLoginInput}
                  onBlur={() => setIsLoginFocus(false)}
                  value={login}
                  onChangeText={(value) => {
                    setLogin(value);
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={isEmailFocus ? styles.focusInput : styles.input}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType={"email-address"}
                  cursorColor={"#212121"}
                  onFocus={focusEmailInput}
                  onBlur={() => {
                    setIsEmailFocus(false);
                  }}
                  value={email}
                  onChangeText={(value) => {
                    setEmail(value);
                  }}
                />
              </View>
              <View style={styles.passwordBox}>
                <TextInput
                  style={isPasswordFocus ? styles.focusInput : styles.input}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType={"default"}
                  cursorColor={"#212121"}
                  secureTextEntry={true}
                  onFocus={focusPasswordInput}
                  onBlur={() => {
                    setIsPasswordFocus(false);
                  }}
                  value={password}
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                />
                <TouchableOpacity style={styles.showBtn}>
                  <Text style={styles.showBtnText}>Показать</Text>
                </TouchableOpacity>
                <View slyle={styles.bottomLine}></View>
              </View>
              <TouchableOpacity
                style={styles.registrationBtn}
                activeOpacity={0.8}
                onPress={handleSubmit}
              >
                <Text style={styles.registrationBtnText}>
                  Зарегистрироваться
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logInBtn}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.logInBtnText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
              <View style={styles.bottomLine} />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

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

  form: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: "auto",
  },
  avatarBox: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhotoBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    paddingLeft: 16,
    color: "#212121",
  },
  focusInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    paddingLeft: 16,
    color: "#212121",
  },
  passwordBox: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    right: 32,
    top: "50%",
    transform: [{ translateY: -16 }],
    width: "auto",
    height: "auto",
  },
  showBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "#1B4371",
  },
  registrationBtn: {
    marginHorizontal: 16,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
    alignItems: "center",
  },
  registrationBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "#fff",
  },
  logInBtn: {
    alignItems: "center",
    marginBottom: 66,
  },
  logInBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "#1B4371",
  },
  bottomLine: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
    borderRadius: 100,
  },
});
