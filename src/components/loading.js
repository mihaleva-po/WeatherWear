import BouncingPreloader from "react-native-bouncing-preloaders";
import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";

const Loading = () => {

    const texts = ['Получаем местоположение..', 'Получаем прогноз погоды..', 'Подбираем одежду..'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1100);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{alignItems: 'center'}}>
            <BouncingPreloader
                icons={[
                    require('../../assets/img/clothes/png/hat.png'),
                    require('../../assets/img/clothes/png/hoody.png'),
                    require('../../assets/img/clothes/png/sneakers-_2_.png'),
                    require('../../assets/img/clothes/png/jacket.png'),
                ]}
                leftRotation="-580deg"
                rightRotation="360deg"
                leftDistance={-180}
                rightDistance={-250}
                size={100}
                speed={1300}
            />

            <Text style={{color: 'white', fontSize: 22, marginTop: 15, fontFamily:'Helvetica Neue'}}>{texts[currentTextIndex]}</Text>

        </View>

    )
}

export default Loading;
