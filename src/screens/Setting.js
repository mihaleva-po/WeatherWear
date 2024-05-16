import {Button, View, Text, SafeAreaView, TextInput, StyleSheet, Image} from "react-native";
import React from "react";
import SelectGender from "../components/DropLists/SelectGender";
import SelectUnits from "../components/DropLists/SelectUnit";
import SelectAge from "../components/DropLists/SelectAge";
import theme from "../../assets/theme/setting.png";

// Можно добавить настройки одежды, чтобы какие то шмотки не показывало

export default function Setting({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Image source={theme} style={styles.img}/>
            <View style={styles.content}>
                <Text style={{fontSize: 30, color: 'white', marginTop: 15}}>Настройки</Text>

                <View>
                    <Text style={styles.label}>Пол</Text>
                    <SelectGender/>
                </View>

                <View>
                    <Text style={styles.label}>Возраст</Text>
                    <SelectAge/>
                </View>

                <View>
                    <Text style={styles.label}>Единицы измерения</Text>
                    <SelectUnits/>
                </View>

                <Button
                    title="Вернуться назад"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    img: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    label: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    }
})
