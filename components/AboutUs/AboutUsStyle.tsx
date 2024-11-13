import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
      elevation: 2, // for Android shadow
    },
    image: {
        width: '100%',  // Ocupa toda a largura do card
        height: 150,    // Defina uma altura fixa para a imagem
        borderRadius: 8,  // Borda arredondada na imagem
        marginBottom: 12,  // Espaçamento entre a imagem e o texto
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
  