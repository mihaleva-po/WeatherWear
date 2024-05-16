import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Setting from "./src/screens/Setting";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
