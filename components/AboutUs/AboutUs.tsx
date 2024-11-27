import React from "react";
import { View, Text, FlatList, Image, Button } from 'react-native';
import { data } from '../../data/database';  // Importe os dados
import { useRouter } from 'expo-router';  // Hook do expo-router para navegação
import { styles } from './AboutUsStyle'

export default function AboutUs() {
  const router = useRouter();  // Usando o hook useRouter do expo-router para navegação

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

      {/* Botão para voltar para a tela "index" */}
      <Button title="Voltar para Início" onPress={() => router.push('/')} />
    </View>
  );
}
