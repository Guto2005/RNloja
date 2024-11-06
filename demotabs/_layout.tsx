import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome6';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: '#000', tabBarInactiveBackgroundColor: '#000', headerShown:false}}>
      <Tabs.Screen 
        name="index"
        options={{
          tabBarActiveTintColor: '#FFD700',
          title: 'Home', 
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="house" color={color} />
        }}
      />
      <Tabs.Screen 
        name="pagina01"
        options={{ title: 'Página 01',
          tabBarActiveTintColor: 'lightgreen',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pagelines" color={color} />
         }}
      />
      <Tabs.Screen 
        name="pagina02"
        options={{ title: 'Página 02',
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pager" color={color} />
         }}
      />
    </Tabs>    
  );
}
