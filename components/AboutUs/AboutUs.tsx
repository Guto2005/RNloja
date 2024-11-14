import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { data } from '../../data/database';  // Importe os dados
import { Ionicons } from '@expo/vector-icons';  // Usando ícones para navegação, caso queira adicionar
import { styles } from './AboutUsStyle'

export default function AboutUs() {
  const aboutData = data.aboutData;  // Acesse 'aboutData' diretamente de 'data'

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quem Somos</Text>

      <FlatList
        data={aboutData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Exibição de imagem com fallback e resizeMode */}
            <Image
              source={{ uri: item.image || 'https://via.placeholder.com/150' }}  // Imagem padrão se não houver imagem
              style={styles.image}
              resizeMode="cover"  // Ajuste a imagem corretamente
              onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}  // Log para erros de imagem
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

