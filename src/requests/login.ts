import axios from "axios";

export interface ILoginReqProps {
    username: string,
    password: string,
    grant_type?: string,
    scope?: string,
    client_id?: string,
    client_secret?: string
}

export const loginRequest = async ({username,password, grant_type,scope, client_id, client_secret}: ILoginReqProps) => {
    let params:any = {};
    if(username)
        params.username = username;
    if(password)
        params.password = password;
    if(grant_type)
        params.grant_type = grant_type;
    if(scope)
        params.scope = scope;
    if(client_id)
        params.client_id = client_id;
    if(client_secret)
        params.username = client_secret;

    const data = Object.keys(params)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');

    const result = await axios.post(`${process.env.REACT_APP_API_HOST}/login`,data,{
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
    return result;
}