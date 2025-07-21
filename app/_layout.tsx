import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{
        headerBackButtonDisplayMode: "minimal",
        headerTitle: "Settings"
      }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
