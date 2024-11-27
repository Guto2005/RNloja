  import React from 'react';
  import { View, Text, Button, StyleSheet } from 'react-native';
  import { StackNavigationProp } from '@react-navigation/stack';

  // Definindo o tipo das rotas (modifique conforme suas rotas)
  type RootStackParamList = {
    FilialRJ: undefined; // ou o nome correto da sua tela
  };

  // Tipando o parâmetro `navigation`
  type FilialRJProps = {
    navigation: StackNavigationProp<RootStackParamList, 'FilialRJ'>;
  };

  export default function FilialRJ({ navigation }: FilialRJProps) {
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
