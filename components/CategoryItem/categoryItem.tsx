import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { styles } from './categoryItemStyle';
import { router } from 'expo-router';

type props = {
    categoryData:Category
}

export  function CategoryItem({categoryData} :props) {

    function handlePress(){
        router.navigate(`/categories/${categoryData.id}`);
    }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
        <Image  style={styles.imageLayer}
        source={{uri: categoryData.cover}}
        resizeMode='cover'
        />
        <View style={styles.blackColorLayer}></View>
        <View style={styles.textLayer}>
            <Text style={styles.text}>{categoryData.title}</Text>
        </View>
    </Pressable>

  );
}