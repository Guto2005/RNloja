import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="test1" options={{headerShown:false}}/>
            <Stack.Screen name="testdois" options={{title:"Página 2"}}/>
        </Stack>
    )
}