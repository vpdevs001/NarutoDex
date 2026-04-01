import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  changeHandler: (text: string) => void;
}

const SearchBar = ({ value, changeHandler }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="magnify"
        size={20}
        color={Colors.textSecondary}
      />

      <TextInput
        placeholder="Search ninja..."
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={changeHandler}
        style={styles.input}
      />

      {value.length > 0 && (
        <MaterialCommunityIcons
          name="close-circle"
          size={18}
          color={Colors.textSecondary}
          onPress={() => changeHandler("")}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: Colors.surface,

    borderWidth: 1,
    borderColor: Colors.border,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: Colors.textPrimary,
  },
});
