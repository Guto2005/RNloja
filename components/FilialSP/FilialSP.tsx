import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { filialSPData } from '../../data/database';  // Dados fictícios para Filial SP
import { styles } from './FilialSPStyle';  // Estilos da Filial SP
import { useNavigation } from '@react-navigation/native';  // Hook para navegação

export default function FilialSP() {
  const navigation = useNavigation();  // Hook para navegação

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filial SP</Text>

      <FlatList
        data={filialSPData}  // Usando os dados fictícios
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

      {/* Botão para retornar à tela anterior */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}