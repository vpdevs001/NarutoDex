import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import type { RootStackParamList } from "../../types/navigation-types";
import type { TailedBeast } from "../../types/tailed-beast-types";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const TailedBeastDetails = () => {
  const route = useRoute<DetailsRouteProp>();
  const { character } = route.params;

  const beast = character as TailedBeast;
  const personal = beast?.personal || {};

  const formatValue = (value: any) => {
    if (!value) return "Unknown";
    if (Array.isArray(value)) return value.join(", ");
    return value;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        {beast.images?.[0] ? (
          <Image source={{ uri: beast.images[0] }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.imageFallback]} />
        )}
        <View style={styles.overlay} />
        <Text style={styles.name}>{beast.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Basic Info</Text>
        <Text style={styles.item}>Status: {personal.status || "Unknown"}</Text>
        <Text style={styles.item}>Clan: {formatValue(personal.clan)}</Text>
        <Text style={styles.item}>
          Village: {formatValue(personal.affiliation)}
        </Text>
      </View>

      {/* TailedBeast-specific: jinchūriki */}
      {personal.jinchūriki && personal.jinchūriki.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Jinchūriki</Text>
          <Text style={styles.item}>{personal.jinchūriki.join(", ")}</Text>
        </View>
      )}

      {"jutsu" in beast && beast.jutsu && beast.jutsu.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Jutsu</Text>
          <Text style={styles.item}>
            {beast.jutsu.slice(0, 6).join(", ")}
          </Text>
        </View>
      )}

      {"natureType" in beast &&
        beast.natureType &&
        beast.natureType.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Nature Type</Text>
            <Text style={styles.item}>{beast.natureType.join(", ")}</Text>
          </View>
        )}

      {beast.uniqueTraits && beast.uniqueTraits.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Unique Traits</Text>
          <Text style={styles.item}>{beast.uniqueTraits.join(", ")}</Text>
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

export default TailedBeastDetails;

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
  imageFallback: {
    backgroundColor: Colors.border,
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