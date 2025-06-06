import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});