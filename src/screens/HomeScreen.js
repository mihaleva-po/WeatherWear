import React, {useEffect, useState} from "react";
import {fetchLocation} from "../currentLocation/fetchLocation";
import {getWeatherOpen} from "../api/getWeatherOpen";
import {getNameCity} from "../api/getNameCity";
import lightTheme from '../../assets/theme/lightTheme.png';
import darkTheme from '../../assets/theme/darkTheme.png';
import {SafeAreaView, View, StyleSheet, Image, Text, StatusBar} from "react-native";
import Search from "../components/Search";
import Forecast from "../components/Forecast";
import {Cog6ToothIcon} from "react-native-heroicons/outline";
import {useQuery} from "react-query";
import {storeData} from "../asyncStorage/asyncStorage";
import {getRecommendation} from "../recommendations/getRecommendation";
import BlockClothes from "../components/BlockClothes";
import LoadingSpin from "../components/loading";
import {useSetting} from "../context/SettingContext";


export default function HomeScreen({navigation}) {

    const {currentSetting} = useSetting();

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
            const icon = weather?.weather[0]?.icon;
            setIsDay(icon[2] === 'd');

            setListClothes(undefined);

            //     Получить рекомендации одежды
            (async () => {
                setListClothes(await getRecommendation(weather?.main.temp, weather?.weather[0]?.description, weather?.wind.speed,
                    weather?.wind?.deg, weather?.main?.humidity, currentSetting?.gender, currentSetting?.age));
            })();
        }
    }, [weather]);

    useEffect(() => {
        setListClothes(undefined);
        //     Получить рекомендации одежды
        (async () => {
            setListClothes(await getRecommendation(weather?.main.temp, weather?.weather[0]?.description, weather?.wind.speed,
                weather?.wind?.deg, weather?.main?.humidity, currentSetting?.gender, currentSetting?.age));
        })();
    }, [currentSetting.age, currentSetting.gender])

    // Изменение геолокации вручную
    const handleLocation = async (coords) => {
        setManualCoords(coords);
        // Записываем полученные координаты в хранилище
        await storeData('coords', JSON.stringify(coords));
    }

    useEffect(() => {
        if (manualCoords) {
            (async () => {
                await refetchCity();
                await refetchWeather();
            })();
        }

    }, [manualCoords]);

    if (errorLocation) return <Text style={{marginTop: 100}}>Не удалось получить локацию</Text>
    if (errorWeather) return <Text style={{marginTop: 100}}>Не удалось получить погоду</Text>
    if (errorCity) return <Text style={{marginTop: 100}}>Не удалось получить название города</Text>

    return (
        <View style={styles.container}>
            <StatusBar style={"light"}></StatusBar>
            <Image source={isDay ? lightTheme : darkTheme} style={styles.img}/>

            {
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
                        <LoadingSpin/>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({

    setting: {
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: 20
    },

    forecast: {
        marginBottom: 50,
        zIndex: -1
    },

    search: {
        marginBottom: 45,
        zIndex: 100
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
