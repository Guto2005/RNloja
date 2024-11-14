// components/FilialRJ.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FilialRJ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filial RJ</Text>
      <Text style={styles.description}>Endereço fictício: Rua das Flores, 123, Rio de Janeiro, RJ</Text>
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
  }
});
