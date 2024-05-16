
// Получение геолокации пользователя

import * as Location from 'expo-location';
import {Alert} from "react-native";

export const getCurrentLocation = async () => {
    try {
        // получаем разрешение на доступ к геопозиции
        await Location.requestForegroundPermissionsAsync();

        // Получение текущей геопозиции пользователя (координат)
        const {coords} = await Location.getCurrentPositionAsync();
        return { latitude: coords.latitude, longitude: coords.longitude };
    } catch (error) {
        Alert.alert('Невозможно определить местоположение', "");
    }
}
