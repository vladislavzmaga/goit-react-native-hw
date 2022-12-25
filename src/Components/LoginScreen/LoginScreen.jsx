import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SvgComponent } from "../SVG/SvgComponent";

export const LoginForm = ({ isShowKeyboard, showKeyboard, hideKeyboard }) => {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const focusEmailInput = () => {
    setIsEmailFocus(true);
    showKeyboard();
  };

  const focusPasswordInput = () => {
    setIsPasswordFocus(true);
    showKeyboard();
  };

  const handleSubmit = () => {
    hideKeyboard();
    const user = {
      email,
      password,
    };
    console.log(user);
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: isShowKeyboard ? 273 : "auto",
      }}
    >
      <Text style={styles.title}>Войти</Text>
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
        <Text style={styles.registrationBtnText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logInBtn} activeOpacity={0.5}>
        <Text style={styles.logInBtnText}>
          Нет аккаунта? Зарегистрироваться
        </Text>
      </TouchableOpacity>
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: "auto",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 32,
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
