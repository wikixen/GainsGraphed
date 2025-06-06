import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#16252d',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24}/>
          )
        }}
      />
      <Tabs.Screen
        name="train"
        options={{
          title: "Train",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "fitness" : "fitness-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "add-circle" : "add-circle-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "Diary",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "nutrition" : "nutrition-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "trending-up" : "trending-up-outline"} color={color} size={24} />
          )
        }}
      />
    </Tabs>
  );
}
