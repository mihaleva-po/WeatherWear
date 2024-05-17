
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { getData, storeData } from "../../asyncStorage/asyncStorage";
import { useSetting } from "../../context/SettingContext";

const local_data = [
    {
        value: 'Мужской',
    },
    {
        value: 'Женский',
    },
];

const SelectGender = _props => {
    const {changeSetting } = useSetting();
    const [currentGender, changeGender] = useState('Мужской');

    useEffect(() => {
        (async () => {
            const gender = await getData('gender');
            changeGender(gender ?? 'Мужской');
        })();
    }, []);

    const handleChange = (value) => {
        changeSetting({ gender: value });
        changeGender(value);
        (async () => {
            await storeData('gender', value);
        })();
    };

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={currentGender}
            data={local_data}
            valueField="value"
            labelField="value"
            imageField="image"
            placeholder="Выберите пол.."
            searchPlaceholder="Search..."
            onChange={e => {
                handleChange(e.value);
            }}
        />
    );
};

export default SelectGender;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 16,
        marginRight: 16,
        marginBottom: 16,
        marginLeft: 0,
        height: 50,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 15,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
        paddingTop: 10,
        paddingBottom: 10,
    },
});
