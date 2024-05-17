import {listClothes} from "./clother";
import {getToken} from "../gigaChat/getToken";
import {getAnswer} from "../gigaChat/getAnswer";


export async function getRecommendation(currentTemp, weatherConditions, speedWind, degWind, humidity, gender, age) {

    let clothes = "";

    listClothes.map(thing => {
        if (thing.temp.min <= currentTemp && thing.temp.max >= currentTemp) {
            clothes += `${thing.name}, `;
        }
    });

    // Удаляем последнюю запятую и пробел
    clothes = clothes.slice(0, -2);


    const prompt = `
Выбери подходящую одежду из следующего списка: ${clothes}.
Для погоды со следующими характеристиками:
- Температура: ${currentTemp}°C
- Погодные условия: ${weatherConditions}
- Скорость ветра: ${speedWind} м/ч
- Направление ветра: ${degWind}°
- Влажность: ${humidity}%

Для человека со следующими характеристиками:
- Пол: ${gender}
- Возраст: ${age} лет

Список одежды должен быть таким, чтобы человек не замерз и ему не было жарко. Ответ выведи в формате массива.

Пример ответа: ["Обувь", "Аксессуар", "Куртка", "Штаны", "Нижняя одежда"].`;


    // Передаем данные gigaChat
    const token = await getToken();
    const answer = await getAnswer((JSON.parse(token)).access_token, prompt);
    return JSON.parse((JSON.parse(answer)).choices[0].message.content);
}

