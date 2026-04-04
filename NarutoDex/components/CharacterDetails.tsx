import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "../constants/colors";

const CharacterDetails = () => {
  const route = useRoute();
  const { character } = route.params as any;

  const personal = character.personal || {};

  const formatValue = (value: any) => {
    if (!value) return "Unknown";
    if (Array.isArray(value)) return value.join(", ");
    return value;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: character.images?.[0] }} style={styles.image} />
        <View style={styles.overlay} />

        <Text style={styles.name}>{character.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Basic Info</Text>

        <Text style={styles.item}>Gender: {personal.sex || "Unknown"}</Text>
        <Text style={styles.item}>Status: {personal.status || "Unknown"}</Text>
        <Text style={styles.item}>Clan: {formatValue(personal.clan)}</Text>
        <Text style={styles.item}>
          Village: {formatValue(personal.affiliation)}
        </Text>
      </View>

      {character.jutsu && (
        <View style={styles.section}>
          <Text style={styles.heading}>Jutsu</Text>
          <Text style={styles.item}>
            {character.jutsu.slice(0, 5).join(", ")}
          </Text>
        </View>
      )}

      {character.natureType && (
        <View style={styles.section}>
          <Text style={styles.heading}>Nature Type</Text>
          <Text style={styles.item}>{character.natureType.join(", ")}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.heading}>Extra</Text>

        <Text style={styles.item}>Team: {formatValue(personal.team)}</Text>
        <Text style={styles.item}>
          Occupation: {formatValue(personal.occupation)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  imageWrapper: {
    height: 300,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  name: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontFamily: "Naruto",
    letterSpacing: 2,
  },

  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  heading: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 8,
    fontWeight: "600",
  },

  item: {
    fontSize: 13,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
});
