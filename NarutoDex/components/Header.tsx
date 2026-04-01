import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/colors";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import type { RootDrawerParamList } from "../types/navigation-types";

interface HeaderProps {
  title?: string;
  logo?: any;
}

type HeaderNavigationProp = DrawerNavigationProp<RootDrawerParamList>;

const Header = ({ title = "Naruto Dex", logo }: HeaderProps) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={({ pressed }) => [
          styles.menuButton,
          pressed && styles.menuButtonPressed,
        ]}
      >
        <Ionicons name="menu" size={22} color={Colors.primary} />
      </Pressable>

      {logo && <Image source={logo} style={styles.logo} />}

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.surface,
    elevation: 6,
    paddingTop: 28,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  menuButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "rgba(255,140,0,0.15)",
    marginRight: 12,
  },

  menuButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },

  logo: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginRight: 10,
  },

  title: {
    flex: 1,
    fontSize: 22,
    color: Colors.primary,
    fontFamily: "Naruto",
    letterSpacing: 1.5,
  },
});