import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function index() {
  return (
    <View style={styles.container}>
            <Text>Sou o Index</Text>
            <Link href="(tabs)/home">Meu Link</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})