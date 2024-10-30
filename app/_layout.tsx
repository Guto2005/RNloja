import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
            <Stack.Screen name="index" />

            <Stack.Screen name="test" />

        </Stack>
    )
}