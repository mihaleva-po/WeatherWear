import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {useSetting} from "../context/SettingContext";


const Forecast = ({cityName, temp, description}) => {

    const {currentSetting, changeSetting} = useSetting();

    return (
        <View>
            <Text style={styles.city}>
                {cityName}
            </Text>

            <View>
                {
                    (currentSetting.unit === 'Стандартная (кельвин)')
                        ?
                        <Text style={styles.degree}>{Math.round(temp) + 273.15} K</Text>
                        :
                        (currentSetting.unit === 'Имперская (фаренгейт)')
                            ?
                            <Text style={styles.degree}>{Math.round(temp) * 9 / 5 + 32} ℉</Text>
                            :
                            <Text style={styles.degree}>{Math.round(temp)} ℃</Text>
                }
            </View>

            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    city: {
        color: 'white',
        textAlign: "center",
        fontSize: 27,
        fontWeight: "bold",
    },

    degree: {
        textAlign: "center",
        fontWeight: "bold",
        color: 'white',
        fontSize: 50,
        marginLeft: 5
    },
    description: {
        letterSpacing: 2,
        textAlign: "center",
        color: 'white',
        fontSize: 22,
    },
});

export default Forecast;


















