import {View, StyleSheet, ScrollView, ActivityIndicator, Text} from "react-native";
import React from "react";
import Card from "./Card";


const BlockClothes = ({listClothes}) => {

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                {
                    listClothes
                        ?
                        <ScrollView style={styles.listCards} showsVerticalScrollIndicator={false}>
                            <View style={styles.cardsContainer}>
                                {listClothes.map((thing, i) => (
                                    <Card key={i} thing={thing}/>
                                ))}
                            </View>
                        </ScrollView>
                        :
                        <View style={{marginTop: 120, height: 240}}>
                            <ActivityIndicator size={'large'}/>
                            <Text style={{color: 'white', fontSize: 22, marginTop: 15, fontFamily: 'Helvetica Neue'}}>
                                Загрузка рекомендаций одежды</Text>
                        </View>
                }
            </View>
        </View>
    )
}

export default BlockClothes;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },

    listCards: {
        alignSelf: 'center',
        height: 360
    },
    cardsContainer: {
        flexDirection: 'row', // Расположение в строку
        flexWrap: 'wrap', // Перенос элементов на следующую строку, если не помещаются
        justifyContent: 'center', // Выравнивание элементов слева
    },
    block: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
        padding: 20,
    },

    title: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "400",
        lineHeight: 29,
        marginTop: 10,
        marginBottom: 10
    },
});
