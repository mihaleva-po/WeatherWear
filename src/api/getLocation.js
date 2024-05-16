import axios from "axios";
import {ApiOpenWeather} from "../constants/constants";


const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return {};
    }
}

const locationsEndpoint = params =>
    `https://api.openweathermap.org/geo/1.0/direct?q=${params}&limit=5&appid=${ApiOpenWeather}`;

export const fetchLocations = (value) => {
    let locationsUrl = locationsEndpoint(value);
    return apiCall(locationsUrl);
}
