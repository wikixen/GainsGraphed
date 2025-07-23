import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackButtonDisplayMode: "minimal",
        contentStyle: { backgroundColor: COLORS.background },
        headerStyle: { backgroundColor: COLORS.background },
        headerTitleStyle: { color: COLORS.foreground },
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{headerTitle: "Settings", headerTitleStyle: {color: COLORS.primaryForeground}}} />
      <Stack.Screen name="exercises" options={{ headerTitle: "Exercises", headerTitleStyle: { color: COLORS.primaryForeground } }} />
    </Stack>
  );
};

export default RootLayout;