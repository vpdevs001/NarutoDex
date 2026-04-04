import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types/navigation-types";
import { Colors } from "../../constants/colors";

type IntroScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Intro"
>;

const { width, height } = Dimensions.get("window");

const IntroScreen: React.FC = () => {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  const player = useVideoPlayer(
    require("../../assets/videos/video.mp4"),
    (p) => {
      p.loop = true;
      p.play();
    },
  );

  const handlePress = (): void => {
    navigation.replace("Home");
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <VideoView
        player={player}
        style={styles.video}
        contentFit="cover"
        nativeControls={false}
      />

      <View style={styles.overlay}>
        <Image
          source={require("../../assets/images/naruto.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Enter the Shinobi World</Text>

        <Text style={styles.subtitle}>Tap anywhere to begin your journey</Text>
      </View>
    </Pressable>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  video: {
    width,
    height,
    position: "absolute",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 20,

    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Naruto",
    letterSpacing: 2,
    marginBottom: 6,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  subtitle: {
    color: Colors.primary,
    fontSize: 14,
    letterSpacing: 1.2,
    opacity: 0.9,

    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
