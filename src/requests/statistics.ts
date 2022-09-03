import axios from "axios";

export const statisticsRequest = async () => {

    const result = await axios.get(`${process.env.REACT_APP_API_HOST}/statistics`,{
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(String(process.env.REACT_APP_TOKEN_KEY))}`
        }
    })
    return result;
}