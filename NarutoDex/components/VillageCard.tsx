import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

interface CardProps {
  id: number;
  name: string;
  handlePress: (id: number) => void;
}

const VillageCard = ({ id, name, handlePress }: CardProps) => {
  return (
    <Pressable
      onPress={() => handlePress(id)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/village.jpg")}
          style={styles.image}
        />

        <View style={styles.overlay} />

        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default VillageCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 5,
    overflow: "hidden",
    marginRight: 4,
  },

  cardPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },

  imageWrapper: {
    height: 140,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
    backgroundColor: Colors.surfaceLight,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  name: {
    position: "absolute",
    bottom: 10,
    left: 8,
    right: 8,
    textAlign: "center",
    color: Colors.textPrimary,
    fontSize: 16,
    fontFamily: "Naruto",
    letterSpacing: 1,
  },
});
