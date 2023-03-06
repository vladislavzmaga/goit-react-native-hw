import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/Components/Home/Home";
import { LoginForm } from "./src/Components/LoginScreen/LoginScreen";
import { CreatePostsScreen } from "./src/Components/MainScreen/CreatePostsScreen";
import { PostsScreen } from "./src/Components/MainScreen/PostsScreen";
import { ProfileScreen } from "./src/Components/MainScreen/ProfileScreen";
import { RegistrationForm } from "./src/Components/RegistrationScreen/RegistrationScreen";

import { GoToButton } from "./src/Components/goToButton";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Text } from "react-native-svg";

const Stack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

function TextTitle(text) {
  return <Text style={styles.title}>{text}</Text>;
}

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen
          name="Registration"
          component={RegistrationForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [{ display: "flex" }, null],
        tabBarStyle: {
          paddingHorizontal: 50,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fff",
        },
        headerTitleAlign: "center",
      }}
    >
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerTitle: () => TextTitle("Публікaції"),
          headerShown: true,
          headerRight: () => (
            <GoToButton screenName="Login" /> //TODO!!!
            /*  <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={() => {
                                //navigation.navigate('Login');
                                // navigation.goBack();
                            }}
                        >
                            <Feather
                                name="arrow-left"
                                size={20}
                                color={'rgba(33, 33, 33, 0.8'}
                            />
                        </TouchableOpacity>*/
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="grid"
              style={focused && styles.focusNav}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "rgba(33, 33, 33, 0.8)",
        })}
      />
      <MainTabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: () => TextTitle("Створити публікцію"),
          headerLeft: () => (
            <GoToButton screenName="Posts" />
            /* <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={() => {
                                // navigation.navigate('Posts');
                                navigation.goBack();
                            }}
                        >
                            <Feather
                                name="arrow-left"
                                size={20}
                                color={'rgba(33, 33, 33, 0.8'}
                            />
                        </TouchableOpacity>*/
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="pluscircle"
              style={focused && styles.focusNav}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "rgba(33, 33, 33, 0.8)",
          // tabBarInactiveTintColor: '#FFF',
          tabBarItemStyle: {
            backgroundColor: "#FFF",
            borderRadius: 20,
          },
        })}
      />
      <MainTabs.Screen
        name="Profiler"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              style={focused && styles.focusNav}
              name="user"
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#BDBDBD",
        }}
      />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  focusNav: {
    paddingVertical: 7,
    paddingHorizontal: 28,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    color: "#fff",
  },
  focused: {
    backgroundColor: "#FFF",
    color: "#FF6C00",
  },
  title: {
    fontWeight: "bold",
    color: "#212121",
    paddingHorizontal: 16,
    fontSize: 17,
  },
  btn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    color: "#BDBDBD",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
