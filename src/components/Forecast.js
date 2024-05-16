import {StyleSheet, Text, View} from "react-native";
import React from "react";


const Forecast = ({cityName, temp, description}) => {
    return (
        <View>
            <Text style={styles.city}>
                {cityName}
            </Text>

            <Text style={styles.degree}>
                {Math.round(temp)}&#176;</Text>
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


















