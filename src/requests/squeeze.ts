import axios from "axios";


export const squeezeRequest = async (longUrl: string) => {

    const result = await axios.post(`${process.env.REACT_APP_API_HOST}/squeeze`, {}, {
        params: {
            link: longUrl
        },
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(String(process.env.REACT_APP_TOKEN_KEY))}`
        }
    })
    return result;
}