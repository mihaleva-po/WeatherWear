import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {getData, storeData} from "../../asyncStorage/asyncStorage";

const local_data = [
    {
        value: 'Стандартная (кельвин)',
    },
    {
        value: 'Метрическая (цельсий)',
    },
    {
        value: 'Имперская (Фаренгейт)',
    },
];

const SelectUnits = _props => {
    const [units, setUnits] = useState(getData('unit') ?? 'Метрическая (цельсий)');

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={units}
            data={local_data}
            valueField="value"
            labelField="value"
            imageField="image"
            placeholder={"Выберите единицы измерения.."}
            searchPlaceholder="Search..."
            onChange={e => {
                setUnits(e.value);
                (async () => {
                    await storeData('unit', e.value);
                })();
            }}
        />
    );
};

export default SelectUnits;

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
    },
});
