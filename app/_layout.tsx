import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />  {/* Nome para a tela principal */}
      <Stack.Screen name="(tabs)" />   {/* Nome para a tela de tabs */}
    </Stack>
  );
}
