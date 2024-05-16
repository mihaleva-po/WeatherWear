import React, {useEffect, useState} from "react";
import {fetchLocation} from "../currentLocation/fetchLocation";
import {getWeatherOpen} from "../api/getWeatherOpen";
import {getNameCity} from "../api/getNameCity";
import lightTheme from '../../assets/theme/lightTheme.png';
import darkTheme from '../../assets/theme/darkTheme.png';
import {SafeAreaView, View, StyleSheet, Image, Button, Text, StatusBar} from "react-native";
import Search from "../components/Search";
import Forecast from "../components/Forecast";
import * as Progress from 'react-native-progress';
import {Cog6ToothIcon} from "react-native-heroicons/outline";
import {useQuery} from "react-query";
import {storeData} from "../asyncStorage/asyncStorage";
import {getRecommendation} from "../recommendations/getRecommendation";
import BlockClothes from "../components/BlockClothes";
import Loading from "../components/loading";



// React Query используй на все API запросы

// Сделай блок с одеждой
// подключи функцию подбора одежды
// в асинхронное хранилище данные из настроек добавь
// есть выбор единиц измерения, но нет где ты их используешь

// Фон красивый сделай в настройках

// Сделать чтобы можно было убрать вещь

// кнопки сделатть одежду холоднее/теплее


export default function HomeScreen({navigation}) {

    const [manualCoords, setManualCoords] = useState(undefined);
    const [listClothes, setListClothes] = useState(undefined);

    // Пытаемся получить геопозицию пользователя или берем координаты москвы
    const {data: location, isLoading: isLocationLoading, error: errorLocation} = useQuery('location', fetchLocation);

    // Получаем название города только после получения координат
    const {
        data: cityName,
        isLoading: isCityLoading,
        error: errorCity,
        refetch: refetchCity
    } = useQuery(['city', location],
        () => getNameCity(manualCoords ?? location), {enabled: !!location});

    const {
        data: weather,
        isLoading: isWeatherLoading,
        error: errorWeather,
        refetch: refetchWeather
    } = useQuery(['weather', location],
        () => getWeatherOpen(manualCoords ?? location), {enabled: !!location});

    const [isDay, setIsDay] = useState(true);

    useEffect(() => {
        if (weather) {
            const icon = weather.weather[0].icon;
            setIsDay(icon[2] === 'd');

            //     Получить рекомендации одежды
            (async () => {
                setListClothes(await getRecommendation(weather.main.temp, weather.weather[0].description, weather.wind.speed,
                    weather.wind.deg, weather.main.humidity));

            })();
        }
    }, [weather]);

    // Изменение геолокации вручную
    const handleLocation = async (coords) => {

        setManualCoords(coords);
        // Записываем полученные координаты в хранилище
        await storeData('coords', JSON.stringify(coords));
        // Показать загрузку

        // setLoading(true);
        // // setLocation(coords);
        // setManualLocation(coords);
    }

    useEffect(() => {

        if (manualCoords) {
            (async () => {
                await refetchCity();
                await refetchWeather();
            })();
        }

    }, [manualCoords]);


    // if (isLocationLoading) return <Text style={{marginTop: 100}}>Загрузка локации</Text>
    // if (isCityLoading) return <Text style={{marginTop: 100}}>Загрузка названия города</Text>
    // if (isWeatherLoading) return <Text style={{marginTop: 100}}>Загрузка погоды</Text>
    //
    // if (errorLocation) return <Text style={{marginTop: 100}}>Не удалось получить локацию</Text>
    // if (errorWeather) return <Text style={{marginTop: 100}}>Не удалось получить погоду</Text>
    // if (errorCity) return <Text style={{marginTop: 100}}>Не удалось получить название города</Text>

    return (
        <View style={styles.container}>
            {/*<StatusBar style={"light"}></StatusBar>*/}
            <Image source={isDay ? lightTheme : darkTheme} style={styles.img}/>

            {
                // loading
                (cityName && weather) ?
                    <SafeAreaView>

                        <View style={styles.search}>
                            {/*раздел поиска города*/}
                            <Search handleLocation={handleLocation}/>
                        </View>

                        <View style={styles.forecast}>
                            {/*Сам прогноз*/}
                            <Forecast cityName={cityName} temp={weather.main.temp} weather={weather}
                                      description={weather.weather[0].description}/>
                        </View>

                        <View style={styles.blockClothes}>
                            {/*Блок рекомендаций одежды */}
                            <BlockClothes listClothes={listClothes}/>
                        </View>

                        <View style={styles.setting}>
                            <Cog6ToothIcon size={55} color={'white'}
                                           onPress={() => navigation.navigate('Setting')}/>
                        </View>
                    </SafeAreaView>
                    :
                    <View style={styles.loading}>
                        <Loading />
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({

    setting: {
      // backgroundColor:'pink',
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: 20
    },

    forecast: {
        // backgroundColor:'blue',
        marginBottom: 50,
    },

    search: {
      // backgroundColor: 'green',
        marginBottom: 45,
    },

    blockClothes: {
        marginBottom: 50,
    },

    container: {
        position: 'relative',
        display: 'flex',
        flex: 1,
    },
    img: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    loading: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250
    }
});

