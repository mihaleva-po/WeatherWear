import AsyncStorage from '@react-native-async-storage/async-storage';

// запоминает последний запрос геолокации, пол, возраст


// записать данные
export const storeData = async (key, value) => {
    for (let i = 0; i < 3; i++) {
        try {
            await AsyncStorage.setItem(key, value);
            return;
        } catch (error) {
            console.log('Error storing value: ', error);
        }
    }
};

// получить данные
export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);

    } catch (error) {
        console.log('Error retrieving value: ', error);
        return null;
    }
};
