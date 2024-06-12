import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { Input } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import * as SecureStore from "expo-secure-store";
import { AxiosContext, AxiosProvider } from "../context/AxiosContext";

const baseUrl = "http://192.168.0.11:8000";

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { publicAxios } = AxiosProvider;

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/v1/token/`, {
        username,
        password,
      });
      console.log("login response", response)
      const { access, refresh } = response;

      authContext.setAuthState({
        accessToken: access,
        refreshToken: refresh,
        authenticated: true,
      });

      await SecureStore.setItemAsync(
        "token",
        JSON.stringify({
          accessToken: access,
          refreshToken: refresh,
        })
      );

      setLoading(false);
      setUsername("");
      setPassword("");

      // if (response.status === 201) {
      //   alert(` You have logined: ${JSON.stringify(response.data)}`);

      // } else {
      //   throw new Error("An error has occurred");
      // }
    } catch (error) {
      console.log(error)
      alert("An error has occurred");
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>Login</Text>
      <Input label="Username" onChangeText={(value) => setUsername(value)} />
      <Input
        label="Password"
        secureTextEntry={hidePassword}
        onChangeText={(value) => setPassword(value)}
        rightIcon={
          hidePassword ? (
            <Ionicons
              name="eye"
              size={24}
              color="black"
              onPress={() => setHidePassword(false)}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={24}
              color="black"
              onPress={() => setHidePassword(true)}
            />
          )
        }
      />
      <Button
        title="Log In"
        loading={loading}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: "80%",
          marginVertical: 10,
        }}
        onPress={() => onLogin()}
      />
      <Button
        title="Back"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default LogIn;
