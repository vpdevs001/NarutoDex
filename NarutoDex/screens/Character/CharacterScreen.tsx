import CharacterCard from "../../components/CharacterCard";
import type { Character } from "../../types/character-types";
import { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getData } from "../../services/api-fetch";
import SearchBar from "../../components/SearchBar";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types/navigation-types";

type CharacterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const CharacterScreen = () => {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const navigation = useNavigation<CharacterScreenNavigationProp>();

  const fetchData = async (pageNumber: number) => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const response = await getData("characters", {
        page: pageNumber,
        limit: 50,
      });

      if (response.characters.length === 0) {
        setHasMore(false);
      } else {
        setData((d) => [...d, ...response.characters]);
        setPage(pageNumber);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleChange = (text: string) => {
    setValue(text);
  };

  const filteredData = useMemo(
    () => data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())),
    [data, value]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SearchBar value={value} changeHandler={handleChange} />

      <FlatList
        data={filteredData}
        numColumns={2}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        onEndReached={() => fetchData(page + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No ninja found</Text>
          </View>
        }
        renderItem={({ item }) => {
          const clan = Array.isArray(item.personal?.clan)
            ? item.personal.clan[0]
            : item.personal?.clan || "Unknown";

          const village = Array.isArray(item.personal?.affiliation)
            ? item.personal.affiliation[0]
            : item.personal?.affiliation || "Unknown";

          return (
            <CharacterCard
              id={item.id}
              name={item.name}
              image={item.images?.[0]}
              clan={clan}
              village={village}
              handlePress={() =>
                navigation.navigate("Details", { character: item })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 6,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
