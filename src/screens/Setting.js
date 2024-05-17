import {Button, View, Text, SafeAreaView, TextInput, StyleSheet, Image} from "react-native";
import React from "react";
import SelectGender from "../components/DropLists/SelectGender";
import SelectUnits from "../components/DropLists/SelectUnit";
import SelectAge from "../components/DropLists/SelectAge";
import theme from "../../assets/theme/setting.png";


export default function Setting({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Image source={theme} style={styles.img}/>
            <View style={styles.content}>
                <Text style={styles.title}>Настройки</Text>

                <View style={styles.dropList}>
                    <Text style={styles.label}>Пол</Text>
                    <SelectGender/>
                </View>

                <View style={styles.dropList}>
                    <Text style={styles.label}>Возраст</Text>
                    <SelectAge/>
                </View>

                <View style={styles.dropList}>
                    <Text style={styles.label}>Единицы измерения</Text>
                    <SelectUnits/>
                </View>

            </View>
            <Button
                title="Вернуться назад"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
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
    },
    dropList: {
        marginBottom: 50
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginTop: 35,
        marginBottom: 50
    }
})
