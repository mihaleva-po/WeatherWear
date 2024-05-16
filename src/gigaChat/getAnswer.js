import axios from 'axios';


export const getAnswer = async (token, prompt) => {

    let data = JSON.stringify({
        "model": "GigaChat-Pro", // ????????????????
        "messages": [
            {
                "role": "user",
                "content": prompt,
            }
        ],
        "temperature": 1, // ????????????? и параметры ниже что они означают
        "top_p": 0.1,
        "n": 1,
        "stream": false,
        "max_tokens": 512,
        "repetition_penalty": 1,
        "update_interval": 0
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };

// 3 попытки или react query
    try {
        const response = await axios(config);
        return JSON.stringify(response.data);

    } catch (err) {
        console.log(err);
        return null;
    }
}
