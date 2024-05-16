
import {getData} from "../asyncStorage/asyncStorage";
import {listClothes} from "./clother";
import {getToken} from "../gigaChat/getToken";
import {getAnswer} from "../gigaChat/getAnswer";


// Улучши промпт с помощью нейросети

export async function getRecommendation(currentTemp, weatherConditions, speedWind, degWind, humidity) {

    const gender = await getData('gender') ?? 'Мужской';
    const age = await getData('age') ?? '18-35';

    let clothes = "";

    listClothes.map(thing => {
        // if (thing.temp.min <= currentTemp && thing.temp.max >= currentTemp) {
            // console.log(thing.name);
            clothes += `${thing.name}, `;
        // }
    });

    // console.log('clothes', clothes);

    // Сформировать список одежды подходящей по данной погоде

    // этот список можно увеличить и тогда картинки соответственно

    // допустим мы сформировали список по погоде чтобы не было совсем абсурда
    // const listClothes = 'Зимние ботинки, Межсезонные ботинки, Кроссовки, Кеды, Сланцы, ' +
    //     'Солнцезащитные очки, Зонтик, Перчатки, Варежки, Платок, Шапка, Шарф, Кепка, Шорты, Юбка, Джинсы, ' +
    //     'Термо штаны, Брюки, Джинсовая куртка, Ветровка, Пальто, Куртка, Пуховик, Пиджак, Кардиган, ' +
    //     'Топ, Майка, Футболка, Водолазка, Свитер';

    // Передаем данные gigaChat

    const prompt = `Выбери подходящую одежду из следующего списка: ${clothes}. 
    Для погоды со следующими характеристика: ' +
        'температура ${currentTemp} градуса цельсия, 
        ${weatherConditions},
        ветер ${speedWind} миль в час, 
        направление ветра ${degWind} deg,
        влажность ${humidity}. ' +
        'Для человека со следующими характеристиками: пол - ${gender}, возраст - ${age} года. 
        Ответ выведи в формате массива.  // Например, ["Обувь", "Аксуссуар", "Куртка", "Штаны", "Нижняя одежда"].
        Список одежды должен быть такой, чтобы человек не замерз и ему не было жарко`;


    // [Обувь, куртка, штаны, головной убор, нижняя одежда]

    // const token = await getToken();
    // const answer = await getAnswer((JSON.parse(token)).access_token, prompt);
    //
    // return JSON.parse((JSON.parse(answer)).choices[0].message.content);

    // Вывод всех элементов одежды
    return clothes.split(", ");

}

