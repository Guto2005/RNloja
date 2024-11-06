import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Test() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Página01</Text>
            <Link href="/pagina02" style={styles.texto}>Clique para ir a pagina02</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#00FF00",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});