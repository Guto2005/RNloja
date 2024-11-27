import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { filialRJData } from '../../data/database'; // Dados fictícios para Filial RJ
import { styles } from './FilialRJStyle';  // Estilos da Filial RJ
import { useNavigation } from '@react-navigation/native';  // Hook para navegação

export default function FilialRJ() {
  const navigation = useNavigation();  // Hook para navegação

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filial RJ</Text>

      <FlatList
        data={filialRJData}  // Usando os dados fictícios
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
