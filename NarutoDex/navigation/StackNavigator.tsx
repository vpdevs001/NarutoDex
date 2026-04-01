import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetails from "../screens/Character/CharacterDetails";
import IntroScreen from "../screens/IntroScreen";
import DrawerNavigator from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Details" component={CharacterDetails} />
    </Stack.Navigator>
  );
}
