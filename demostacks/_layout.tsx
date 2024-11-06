import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen name="pagina01" options={{ title: "Página 01" }} />
      <Tabs.Screen name="pagina02" options={{ title: "Página 02" }} />
    </Tabs>
  );
}
