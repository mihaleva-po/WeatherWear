import axios from "axios";
import {ApiOpenWeather} from "../constants/constants";


export const getNameCity = async (location) => {
    const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=1&appid=${ApiOpenWeather}`);
    return data[0]?.local_names?.ru || data[0]?.name;
}




