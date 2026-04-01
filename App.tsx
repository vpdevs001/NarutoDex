import { useFonts } from "expo-font";
import { Text } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./NarutoDex/navigation/StackNavigator";

export default function App() {
  const [loaded] = useFonts({
    Naruto: require("./assets/fonts/njnaruto.ttf"),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
