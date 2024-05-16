import {View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import Card from "./Card";
import Loading from "./loading";


const BlockClothes = ({listClothes}) => {

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                {/*<Text style={styles.title}>Рекомендации по одежде</Text>*/}

                {
                    listClothes
                        ?

                        // Может убрать скролл
                        <ScrollView style={styles.listCards} showsVerticalScrollIndicator={false}>
                            <View style={styles.cardsContainer}>
                                {listClothes.map((thing, i) => (
                                    <Card key={i} thing={thing}/>
                                ))}
                            </View>
                        </ScrollView>

                        :
                        <View style={{marginTop: 120}}>
                            <Loading/>
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
        minHeight: 200, // используется при отображении загрузки
        maxHeight: 360,
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














