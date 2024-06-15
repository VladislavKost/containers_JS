import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { Button } from "@rneui/themed";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Home");
  //   };
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <Text>Profile</Text>
      <Button title="Log Out" onPress={() => authContext.logout()}></Button>
    </View>
  );
}
