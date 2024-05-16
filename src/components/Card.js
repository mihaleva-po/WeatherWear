import {View, Text, StyleSheet} from "react-native";
import Icon from "./Icon";


const Card = ({thing}) => {
    return (
        <View style={styles.container}>
            <Icon name={thing}/>
            <Text style={styles.name}>{thing}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        aspectRatio: 1.1, // Сохранение соотношения сторон
        margin: 5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    },

    name: {
        color: "#000",
        textAlign: "center",
        fontSize: 12,
        fontStyle: "normal",
    },
});

export default Card;
