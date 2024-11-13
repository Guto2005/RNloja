import React from 'react';
import { Pressable, Text, Image, View } from 'react-native';
import { styles } from './productItemStyle';
import { Link } from 'expo-router'

type Props = {
    productData:Product
}

export function ProductItem({productData}:Props) {
    return (

        <Link href={`/product/${productData.id}`} style={styles.container} asChild>
            
           <Pressable>
            <Image
                style={styles.image}
                source={{uri:productData.image}}
                resizeMode='cover'
            />
            <View style={styles.textContainer}>
                <Text style={styles.destaque}>{productData.title}</Text>
                <Text style={styles.destaque}>{productData.description}</Text>
                <Text style={styles.destaque}>{productData.price}</Text>
            </View>
           </Pressable>

        </Link>
    );
}