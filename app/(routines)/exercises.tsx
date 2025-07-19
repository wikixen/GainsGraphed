import { COLORS } from "@/constants/colors";
import { baseExercises } from "@/constants/exercises";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface BtnProps {
  img?: string;
  name: string;
}

const Btn = ({ name }: BtnProps) => (
  <Link href={"/"}>
    <Pressable>
      <Text style={styles.item}>{name}</Text>
    </Pressable>
  </Link>
);

// AllExercises screen contains a list of all preset & custom exercises
const AllExercises = () => {
  const [text, onChangeText] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <FlatList
          data={baseExercises}
          renderItem={({ item }) => <Btn name={item} />}
          style={styles.list}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AllExercises;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
  },
  list: {
    marginBlock: 10,
  },
  item: {
    fontSize: 20,
    paddingBlock: 10,
    backgroundColor: "#E2EFF8",
  },
});
