import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

const SettingsBtn = () => (
  <Pressable>
    <Link href={"/settings"}>
      <Ionicons
        name="settings-outline"
        size={24}
        color={COLORS.primaryForeground}
      />
    </Link>
  </Pressable>
)

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: { backgroundColor: COLORS.background },
        headerStyle: { backgroundColor: COLORS.background },
        headerTintColor: COLORS.primaryForeground,
        sceneStyle: { backgroundColor: COLORS.background },
        headerRight: () => <SettingsBtn />
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "fitness" : "fitness-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "Diary",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "restaurant" : "restaurant-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="routines"
        options={{
          title: "Routines",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "barbell" : "barbell-outline"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <View style={styles.headerBtns}>
              <Pressable style={styles.headerRightBtn}>
                <Link href={"/exercises"}>
                  <Text style={styles.headerRightBtnText}>Exercises</Text>
                </Link>
              </Pressable>
              <SettingsBtn />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="graphs"
        options={{
          title: "Graphs",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "today" : "today-outline"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <View style={styles.headerBtns}>
              <Pressable>
                <Link href={"/gallery"}>
                  <Ionicons
                    name="camera-outline"
                    size={24}
                    color={COLORS.primaryForeground}
                  />
                </Link>
              </Pressable>
              <SettingsBtn />
            </View>
          )
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  headerBtns: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center"
  },
  headerRightBtn: {
    borderWidth: 1,
    borderColor: COLORS.primaryForeground,
    paddingBlock: 5,
    paddingInline: 10,
    borderRadius: 5
  },
  headerRightBtnText: {
    color: COLORS.primaryForeground,
    fontSize: 15,
    fontWeight: "500"
  }
});
