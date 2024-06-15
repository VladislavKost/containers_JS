import { Text, View } from "react-native";

import { styles } from "../styles/styles";

export default function HomeScreen({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Home");
  //   };

  return (
    <View style={styles.main}>
      <Text>Home page</Text>
    </View>
  );
}
