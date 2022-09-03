import React, {useContext, useState} from 'react';
import {ILoginReqProps, loginRequest} from "../requests";
import {Button, Form} from "react-bootstrap";
import {AuthContext} from "../context";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const context = useContext(AuthContext)

    const handleBtnClick = async () => {
        const loginParams: ILoginReqProps = {
            username: login,
            password: pass
        }

        const res = await loginRequest(loginParams)
        if(res.data.access_token){
            localStorage.setItem(String(process.env.REACT_APP_TOKEN_KEY), res.data.access_token);
            context?.authStore.setIsAuth(true)
        }
    }

    return (
        <div>
            <h2>Вход</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите логин"
                        value={login}
                        onChange={(e)=>setLogin(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleBtnClick}>
                    Войти
                </Button>
            </Form>
            <Link to="/reg">Зарегистрироваться?</Link>
        </div>
    );
};

export default LoginPage;