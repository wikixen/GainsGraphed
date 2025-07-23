import ListBtn from "@/components/listbtn";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Settings = () => {
  return (
    <View style={styles.list}>
      <ListBtn> Email </ListBtn>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  list: {

  }
});