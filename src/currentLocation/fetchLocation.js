import {getData, storeData} from "../asyncStorage/asyncStorage";
import {getCurrentLocation} from "./getCurrentLocation";


// Получаем координаты

export const fetchLocation = async () => {
    // пытаемся получить координаты местоположения пользователя
    let location = await getCurrentLocation();

    // Записываем полученные координаты в хранилище
    await storeData('coords', JSON.stringify(location));

    // иначе пытаемся получить предыдущую локацию
    if (!location) {
        // Получаем предыдущую локацию из хранилища
        location = JSON.parse(await getData('coords'));
    }

    // иначе берем координаты по умолчанию
    if (!location) {
        // Координаты Москвы
        location = {latitude:55.755864, longitude: 31.617698};
    }

    return location;
}
