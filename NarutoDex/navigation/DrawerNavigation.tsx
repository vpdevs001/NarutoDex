import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import CharacterScreen from "../screens/Character/CharacterScreen";
import AkatsukiScreen from "../screens/Akatsuki/AkatsukiScreen";
import TailedBeastScreen from "../screens/TailedBeast/TailedBeastScreen";
import KaraScreen from "../screens/Kara/KaraScreen";
import { Colors } from "../constants/colors";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/naruto.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Naruto Dex</Text>
      </View>

      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "slide",

        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: "#ccc",

        drawerActiveBackgroundColor: "rgba(255,140,0,0.15)",
        drawerInactiveBackgroundColor: "transparent",

        drawerStyle: {
          backgroundColor: Colors.background,
          width: 260,
        },

        drawerItemStyle: {
          paddingHorizontal: 10,
          paddingVertical: 5,
        },

        drawerLabelStyle: {
          fontSize: 14,
          marginLeft: -10,
        },

        header: ({ navigation }) => (
          <Header logo={require("../../assets/images/naruto.png")} />
        ),
      }}
    >
      <Drawer.Screen name="Characters" component={CharacterScreen} />
      <Drawer.Screen name="Akatsuki" component={AkatsukiScreen} />
      <Drawer.Screen name="TailedBeast" component={TailedBeastScreen} />
      <Drawer.Screen name="Kara" component={KaraScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
    marginBottom: 10,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: "Naruto",
    color: Colors.primary,
    letterSpacing: 2,
  },
});
