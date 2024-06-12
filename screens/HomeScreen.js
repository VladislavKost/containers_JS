import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { Button } from "@rneui/themed";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Home");
  //   };
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <Text>Home page</Text>
      <Button title="Log Out" onPress={() => authContext.logout()}></Button>
    </View>
  );
}
