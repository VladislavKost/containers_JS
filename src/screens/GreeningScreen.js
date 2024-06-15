import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

const Greeting = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>Greeting</Text>
      <Button
        title="Sign Up"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 20,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: "80%",
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Log in"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 20,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          height: 50,
          width: "80%",
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate("LogIn")}
      />
    </SafeAreaView>
  );
};

export default Greeting;
