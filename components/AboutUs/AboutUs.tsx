import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { data } from '../../data/database';  // Importe o objeto data aqui
import { styles } from './AboutUsStyle';  // Importe os estilos

export default function AboutUs() {
  // Acesse aboutData diretamente de data
  const aboutData = data.aboutData;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quem Somos</Text>
      
      <FlatList
        data={aboutData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Adicionando a imagem do item */}
            <Image 
              source={{ uri: item.image }}  // Usando a URL da imagem
              style={styles.image}  // Aplicando o estilo
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
