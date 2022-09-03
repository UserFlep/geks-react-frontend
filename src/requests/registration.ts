import axios from "axios";

export const registrationRequest = async (username: string, password: string) => {
    const result = await axios.post(`${process.env.REACT_APP_API_HOST}/register`,{},{
        params: {
            username,
            password
        },
        headers: {
            'Content-type': 'application/json'
        }
    })
    return result;
}