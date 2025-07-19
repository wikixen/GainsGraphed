import { ReactNode, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  trigger: ReactNode | string;
  dropdownItems: string[];
}

const Dropdown = ({trigger, dropdownItems}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.buttonText}>{trigger}</Text>
      </Pressable>
      {isVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={dropdownItems}
            renderItem={(item) => (
              <Pressable style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>{ item.item }</Text>
              </Pressable>
            )}
            keyExtractor={item => item}
          />
        </View>
      )}
    </View>
  )
}

export default Dropdown;

const styles = StyleSheet.create({
  container: {},
  button: {},
  buttonText: {
    color: "white"
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 1,

  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: {},
});