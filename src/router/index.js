import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { Home, TambahKontak, EditKontak } from '../pages'



const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="TambahKontak" component={TambahKontak} options={{ headerShown: false }} />
            <Stack.Screen name="EditKontak" component={EditKontak} />
        </Stack.Navigator>
    )
}

export default Router
