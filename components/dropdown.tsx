import { COLORS } from "@/constants/colors";
import { ReactNode, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  trigger: ReactNode | string;
  // dropdownItems: string[];
  dropdownItems: {
    item: string;
    type: "normal" | "destructive";
  }[];
}

const Dropdown = ({trigger, dropdownItems}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.buttonText}>{trigger}</Text>
      </Pressable>
      {isVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={dropdownItems}
            renderItem={({item: item}) => (
              <Pressable style={styles.dropdownItem}>
                {item.type === "destructive" ? <Text style={styles.dropdownDestructiveText}>{item.item}</Text> : <Text style={styles.dropdownText}>{item.item}</Text>}
              </Pressable>
            )}
            keyExtractor={item => item.item}
          />
        </View>
      )}
    </View>
  )
}

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "auto"
  },
  buttonText: {
    color: "white"
  },
  dropdown: {
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: COLORS.popoverBackground,
    position: "absolute",
    width: "auto",
    borderColor: COLORS.border,
    borderBottomEndRadius: 1,
    borderWidth: 1,
    elevation: 1
  },
  dropdownItem: {
    marginInline: 10,
    paddingInline: 20,
    paddingBlock: 10,
  },
  dropdownText: {
    fontSize: 15,
    color: COLORS.popoverForeground,
    textAlign: "center",
  },
  dropdownDestructiveText: {
    fontSize: 15,
    color: COLORS.destructive,
    textAlign: "center"
  },
});