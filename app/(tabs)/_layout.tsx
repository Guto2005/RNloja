import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6"
 
export default function TabLayout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor:"goldenrod", headerShown:true}}>
        <Tabs.Screen
        name="home"
        options={{
            title: "Início",
            tabBarIcon: ({ color }) =>
                <FontAwesome
                size={28}
                name="house"
                color={color} />
        }}
        />
 
 <Tabs.Screen
        name="categories"
        options={{
            title: "Categorias",
            tabBarIcon: ({ color }) =>
                <FontAwesome
                size={28}
                name="folder"
                color={color} />
        }}
        />

        <Tabs.Screen
        name="aboutus"
        options={{
            title: "Quem Somos",
            tabBarIcon: ({ color }) =>
                <FontAwesome
                size={28}
                name="user"
                color={color} />
        }}
        />
    </Tabs>
  
  )
}
 