import qs from "qs";
import uuid from "react-native-uuid";
import {auth} from "../constants/constants";
import axios from "axios";

export const getToken = async () => {

    let data = qs.stringify({
        'scope': 'GIGACHAT_API_PERS'
    });

    // Создадим идентификатор UUID (36 знаков)
    const rqUid = uuid.v4();

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'RqUID': rqUid,
            'Authorization': `Basic ${auth}`
        },
        data: data
    };

    for (let i = 0; i < 3; i++) {
        try {
            const response = await axios(config);
            return JSON.stringify(response.data);
        } catch (err) {
            console.log(err);
        }
    }

}
