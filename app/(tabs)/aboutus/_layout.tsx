// app/tabs/_layout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutUs from '../../components/AboutUs/AboutUs';  // Componente Quem Somos
import FilialRJ from '../../components/aboutus/FilialRJ'; // Componente FilialRJ
import FilialSP from '../../components/aboutus/FilialSP'; // Componente FilialSP
import { RootTabParamList } from './types'; // Tipagem para as rotas

// Criação do TabNavigator
const Tab = createBottomTabNavigator<RootTabParamList>();

function AboutUsTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Quem Somos"
      screenOptions={{
        headerStyle: { backgroundColor: '#3b5998' }, // Estilo do header
        headerTintColor: '#fff',  // Cor do título do header
        headerTitleAlign: 'center', // Alinhamento do título
      }}
    >
      <Tab.Screen 
        name="Quem Somos" 
        component={AboutUs} // Componente de "Quem Somos"
      />
      <Tab.Screen 
        name="FilialRJ" 
        component={FilialRJ} // Componente para a filial RJ
      />
      <Tab.Screen 
        name="FilialSP" 
        component={FilialSP} // Componente para a filial SP
      />
    </Tab.Navigator>
  );
}

// Exportando o componente como a navegação principal
export default function TabLayout() {
  return (
    <NavigationContainer>
      <AboutUsTabs />
    </NavigationContainer>
  );
}
