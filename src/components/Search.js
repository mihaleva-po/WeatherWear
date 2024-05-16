import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme} from "../theme";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {MapPinIcon} from "react-native-heroicons/solid";
import React, {useCallback} from "react";
import {fetchLocations} from "../api/getLocation";
import {debounce} from "lodash";


const Search = ({handleLocation}) => {

    // переключение поиска
    const [showSearch, toggleSearch] = React.useState(false);

    // местоположение
    const [locations, setLocations] = React.useState([]);

    // смена локации
    const handleLocationNow = (loc) => {
        toggleSearch(false);
        setLocations([]);
        handleLocation({latitude: loc.lat, longitude: loc.lon});
    }

    const handleSearch = (value) => {
        if (value.length > 2) {
            fetchLocations(value).then(data => {
                setLocations(data);
            });
        }
    }

    const handleTextDebounce = useCallback(debounce(
        handleSearch, 0
    ), []);

    return (
        <View style={styles.searchBox}>
            <View style={[styles.search, {backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent'}]}>
                {
                    showSearch ?
                        <TextInput
                            onChangeText={handleTextDebounce}
                            style={styles.searchText}
                            placeholder={"Поиск города"}
                            placeholderTextColor={'lightgray'}/>
                        : null
                }

                <TouchableOpacity style={styles.searchButton}
                                  onPress={() => toggleSearch(!showSearch)}>
                    {/*Иконка поиска*/}
                    <MagnifyingGlassIcon size={35} color={'white'}/>

                </TouchableOpacity>
            </View>

            {/* Результаты поиска */}
            {
                locations.length > 0 && showSearch ? (
                    <View style={styles.listLocations}>
                        {
                            locations.map((loc, i) => {

                                let showBorder = i + 1 !== locations.length;
                                let borderClass = showBorder ? styles.border : null;

                                return (<TouchableOpacity key={i}
                                                          style={[styles.choiceLocation, borderClass]}
                                                          onPress={() => handleLocationNow(loc)}
                                >
                                    <MapPinIcon size={20} color={'gray'}/>
                                    <Text
                                        style={styles.textLocation}>{loc?.local_names?.ru || loc?.name}, {loc?.country}</Text>
                                </TouchableOpacity>)
                            })
                        }
                    </View>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        margin: 10,
        position: "relative",
        zIndex: 50,
    },
    search: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 50,
    },
    searchText: {
        paddingLeft: 25,
        flex: 1,
        fontSize: 19,
        color: 'white',
        paddingBottom: 5
    },
    searchButton: {
        backgroundColor: theme.bgWhite(0.3),
        borderRadius: 50,
        padding: 8,
        margin: 20,
    },
    listLocations: {
        position: "absolute",
        width: '100%',
        backgroundColor: '#ffffff',
        top: 45,
        borderRadius: 24
    },
    choiceLocation: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        paddingHorizontal: 23,
        marginBottom: 2,
    },
    border: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
    },
    textLocation: {
        color: 'black',
        fontSize: 25,
        marginLeft: 20,
    }
});

export default Search;
