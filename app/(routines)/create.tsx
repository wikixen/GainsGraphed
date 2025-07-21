import { COLORS } from "@/constants/colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CreateRoutine = () => {

  return (
    <View>
      <Text>Routine Name</Text>
      <TextInput />
      <Pressable style={styles.createBtn}>
        <Link href={"/exercises"}>
          <Text style={styles.createBtnText}>Add Exercise</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default CreateRoutine;

const styles = StyleSheet.create({
  createBtn: {
      backgroundColor: COLORS.secondary,
      paddingBlock: 15,
      display: "flex",
      alignItems: "center",
      borderRadius: 5
    },
    createBtnText: {
      color: COLORS.secondaryForeground,
      fontSize: 20
    },
});
