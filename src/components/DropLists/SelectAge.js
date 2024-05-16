import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import {getData, storeData} from "../../asyncStorage/asyncStorage";

const local_data = [
    {
        value: 'меньше 12 лет',
    },
    {
        value: '12-17 лет',
    },
    {
        value: '18-35'
    },
    {
        value: '36-50'
    },
    {
        value: 'больше 50',
    },
];


const SelectAge = _props => {

    const [currentAge, changeAge] = useState(getData('age') ?? '18-35');

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={currentAge}
            data={local_data}
            valueField="value"
            labelField="value"
            imageField="image"
            placeholder="Выберите ваш возраст.."
            searchPlaceholder="Search..."
            onChange={e => {
                changeAge(e.value);
                (async () => {
                    await storeData('age', e.value);
                })();
            }}
        />
    );
};

export default SelectAge;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 16,
        marginRight: 16,
        marginBottom: 16,
        marginLeft: 0,
        height: 50,
        width: 250,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 15
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
        paddingTop: 10,
        paddingBottom: 10
    },
});
