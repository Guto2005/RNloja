import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { NavigationContainer } from '@react-navigation/native'; // Importando o NavigationContainer

export default function Layout() {
  return (
    <NavigationContainer> {/* Envolva o conteúdo com NavigationContainer */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // Nome da página principal
            options={{
              drawerLabel: 'Home',
              title: 'overview',
            }}
          />
          <Drawer.Screen
            name="user/[id]" // Nome da página dinâmica
            options={{
              drawerLabel: 'User',
              title: 'overview',
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
