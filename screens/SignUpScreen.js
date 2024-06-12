import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { Input } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
const baseUrl = "http://192.168.0.11:8000";

const SignUp = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    console.log(username, email, password);
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/v1/users/sign-up`, {
        username,
        email,
        password,
      });
      console.log(response)
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setLoading(false);
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log(error)
      alert("An error has occurred");
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>Sign Up</Text>
      <Input label="Username" onChangeText={(value) => setUsername(value)} />
      <Input label="Email" onChangeText={(value) => setEmail(value)} />
      <Input
        label="Password"
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={hidePassword}
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
      <Input label="Repeat password" secureTextEntry={true} />
      <Button
        title="Sign Up"
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
        onPress={() => createUser()}
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

export default SignUp;
