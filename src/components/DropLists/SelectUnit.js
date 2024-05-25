import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {getData, storeData} from "../../asyncStorage/asyncStorage";
import {useSetting} from "../../context/SettingContext";

const local_data = [
    {
        value: 'Стандартная (кельвин)',
    },
    {
        value: 'Метрическая (цельсий)',
    },
    {
        value: 'Имперская (фаренгейт)',
    },
];

const SelectUnits = _props => {

    const {changeSetting} = useSetting();
    const [currentUnit, changeUnit] = useState('Метрическая (цельсий)');

    useEffect(() => {
        (async () => {
            const unit = await getData('unit');
            changeUnit(unit ?? 'Метрическая (цельсий)');
        })();
    }, []);

    const handleChange = (value) => {
        changeSetting({unit: value});
        changeUnit(value);
        (async () => {
            await storeData('unit', value);
        })();
    };

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={currentUnit}
            data={local_data}
            valueField="value"
            labelField="value"
            imageField="image"
            placeholder={"Выберите.."}
            searchPlaceholder="Search..."
            onChange={e => {
                handleChange(e.value);
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

