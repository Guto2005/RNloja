import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Defina o tipo para as rotas da sua navegação
type RootStackParamList = {
  FilialRJ: undefined; // Ou outra tela que você tenha
  // outras rotas aqui
};

// Tipando o navigation
type FilialRJProps = {
  navigation: StackNavigationProp<RootStackParamList, 'FilialRJ'>;
  address: string;
  name: string;
};

export default function FilialRJ({ navigation, address, name }: FilialRJProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.description}>{address}</Text>
      <Button title="Voltar para Quem Somos" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 8,
  },
});
