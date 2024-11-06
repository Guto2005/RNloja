import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Test() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Página02</Text>
            <Link href="" style={styles.texto}>Clique para ir a tela index</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0000FF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});