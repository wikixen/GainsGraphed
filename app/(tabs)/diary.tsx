import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// FoodDiary shows food eaten separated by category(breakfast, lunch, snack, etc.)
const FoodDiary = () => {
  const [isMenuVisible, setMenuVisible] = useState(false) 

  return (
    <View style={styles.container}>
      {/* Graph Card Here */}
      <View style={styles.tab}>
        <View style={styles.button}>
          <Pressable onPress={() => setMenuVisible(!isMenuVisible)}>
            <Ionicons
              name="add"
              color={COLORS.foreground}
              size={24}
            />
          </Pressable>
          {isMenuVisible && (
            <View>
              <Text>Placeholder</Text>
            </View>
          )}
          <Text style={styles.header}>Breakfast</Text>
        </View>
        <Ionicons
          name="arrow-down"
          color={COLORS.foreground}
          size={20}
        />
      </View>
    </View>
  );
};

export default FoodDiary;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.cardBackground,
    padding: 5,
    borderRadius: 5,
    borderColor: COLORS.border,
    borderWidth: 1
  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.foreground
  },
  dropdown: {
    
  }
});
