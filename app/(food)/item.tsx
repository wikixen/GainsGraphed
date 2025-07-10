import { Food } from "@/constants/types";
import { StyleSheet, Text, View } from "react-native";

//Food screen shows the details of a single food item; Is shown when an item is clicked in food diary
const FoodItem = ({data}: {data: Food}) => {
  return (
    <View>
      <Text>Food</Text>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
