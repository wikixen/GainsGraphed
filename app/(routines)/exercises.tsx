import { COLORS } from "@/constants/colors";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


interface BtnProps {
  img?: string;
  name: string;
}

const Btn = ({ name }: BtnProps) => (
  <Pressable style={styles.btn}>
    {/* Change Link */}
    <Link href={"/"}>
      <Text style={styles.btnText}>{name}</Text>
    </Link>
  </Pressable>
);

// AllExercises screen contains a list of all preset & custom exercises
const AllExercises = () => {
  const [text, onChangeText] = useState("");

  // The exercises will be sent over by server
  const exercises = [
    "Barbell Bench Press",
    "Cable Lateral Raise",
    "Standing Calf Raise",
  ]
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <FlatList
        data={exercises}
        renderItem={({ item }) => <Btn name={item} />}
      />
    </View>
  );
};

export default AllExercises;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderColor: COLORS.border,
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    fontSize: 20,
    padding: 10
  },
  btn: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginBlock: 1,
    borderRadius: 5
  },
  btnText: {
    fontSize: 20,
  },
});
