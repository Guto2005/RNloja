import { Tabs } from "expo-router";
import { FontAwesome }from "@expo/vector-icons/FontAwesome";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown:true}}>
            <Tabs.Screen name="index" options={
                {
                    title: "Home",
                    tabBarIcon:({color})
                }}
             />
            <Tabs.Screen name="test1" options={{headerShown:false}}/>
            <Tabs.Screen name="testdois" options={{title:"Página 2"}}/>
        </Tabs>
    )
}