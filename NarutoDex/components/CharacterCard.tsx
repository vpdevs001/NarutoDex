import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardProps {
  id: number;
  name: string;
  image: string;
  clan: string;
  village: string;
  handlePress: (id: number) => void;
}

const Card = ({ id, name, image, clan, village, handlePress }: CardProps) => {
  return (
    <Pressable
      onPress={() => handlePress(id)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.overlay} />

        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="map-marker" size={14} color="#fff" />
            <Text numberOfLines={1} style={styles.badgeText}>
              {village}
            </Text>
          </View>

          <View style={[styles.badge, styles.clanBadge]}>
            <MaterialCommunityIcons
              name="account-group"
              size={14}
              color="#fff"
            />
            <Text numberOfLines={1} style={styles.badgeText}>
              {clan}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

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

  inner: {
    padding: 12,
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

  infoContainer: {
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    gap: 6,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    flex: 1,
  },

  clanBadge: {
    backgroundColor: "#ff6b00",
  },

  badgeText: {
    color: "#fff",
    fontSize: 11,
    flexShrink: 1,
  },
});
