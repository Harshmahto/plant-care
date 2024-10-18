import { StyleSheet, Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'
import React from 'react'




const _layout = () => {
  return (
<Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="firstPage" options={{}} />
    </Stack>
  )
}

export default _layout