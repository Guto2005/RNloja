import React from 'react';

import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack>
        <Stack.Screen name="categoriesscreen" 
        options={{title:"Lista de Categorias"}}
        />

    <Stack.Screen name="[id]" />
    </Stack>
  );
}