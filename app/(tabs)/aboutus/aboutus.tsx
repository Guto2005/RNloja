import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { aboutData } from '../../../data/database';  // Dados importados

export default function AboutUs() {
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento das imagens
  
  // Função para lidar com o carregamento das imagens
  const handleImageLoadStart = () => setLoading(true);
  const handleImageLoadEnd = () => setLoading(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quem Somos</Text>
      
      <FlatList
        data={aboutData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Exibindo a imagem com fallback */}
            <Image
              source={{ uri: item.image || 'https://via.placeholder.com/150' }}  // Imagem de fallback
              style={styles.image}
              resizeMode="cover"  // Garantindo que a imagem cubra a área corretamente
              onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}  // Log de erro
              onLoadStart={handleImageLoadStart}  // Quando a imagem começar a carregar
              onLoadEnd={handleImageLoadEnd}  // Quando a imagem carregar
            />
            {/* Exibindo o indicador de carregamento se necessário */}
            {loading && <ActivityIndicator size="large" color="#3498db" style={styles.loader} />}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para sombra no Android
  },
  image: {
    width: '100%',  // A imagem ocupa toda a largura do card
    height: 150,    // Definindo a altura da imagem
    borderRadius: 8,  // Borda arredondada na imagem
    marginBottom: 12,  // Espaçamento entre a imagem e o texto
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,  // Para centralizar o ActivityIndicator
    marginTop: -25,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 8,
  }
});
