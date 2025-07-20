// Routines shows all saved routines, allows users to schedule routines through a start button, & create new routines
import Dropdown from "@/components/dropdown";
import { COLORS } from "@/constants/colors";
import { SampleUser } from "@/sample/sampleData";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  weekAmount: number;
}

const RoutineBtn = ({title, weekAmount}: Props) => {
  return (
    <View style={styles.routineCard}>
      <Pressable style={styles.routineCardBtn}>
        <View style={styles.routineCardHeader}>
          <Text style={styles.routineCardHeaderText}>{ title }</Text>
          <Dropdown
            trigger={<Ionicons name="ellipsis-horizontal" color={COLORS.secondary} size={20} />}
            dropdownItems={[
              {
                item: "Edit",
                type: "normal"
              },
              {
                item: "Delete",
                type: "destructive"
              }
            ]}
          />
        </View>
        <View>
          <Text style={styles.routineCardWeeks}>{weekAmount !== 1 ? `${weekAmount} Weeks` : `${weekAmount} Week` }</Text>
        </View>
      </Pressable>
    </View>
  )
}

const Routines = () => {
  const sampleRoutines = SampleUser.routines;

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleRoutines}
        renderItem={({ item }) => (
          <RoutineBtn
            title={item.title}
            weekAmount={item.length}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      {/* Need to change to proper link */}
      <Pressable style={styles.createBtn}>
        <Link href={"/create"}>
          <Text style={styles.createBtnText}>Create A Routine</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default Routines;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    margin: 15
  },
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
  routineCard: {
    height: 100,
    backgroundColor: COLORS.cardBackground,
    padding: 10,
    borderColor: COLORS.border,
    borderWidth: 2,
    marginBlock: 10,
    borderRadius: 5
  },
  routineCardBtn: {
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
  },
  routineCardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  routineCardHeaderText: {
    color: COLORS.cardForeground,
    fontSize: 20,
    fontWeight: 600
  },
  routineCardWeeks: {
    color: COLORS.foreground,
    position: "absolute",
  },
});
