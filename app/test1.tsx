import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Test() {
    return(
        <View style={styles.container}>
            <Text>Página Teste 1</Text>
            <Link href="/testdois">Clique para ir a tela testdois</Link>
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
});