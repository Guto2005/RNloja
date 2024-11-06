import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function home() {
  return (
    <View style={styles.container}>
            <Text>Sou a Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})