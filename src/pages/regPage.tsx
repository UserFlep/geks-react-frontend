import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {registrationRequest} from "../requests";
import {Button, Form} from "react-bootstrap";

const RegPage = () => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    let navigate = useNavigate();

    const handleBtnClick = () => {

        registrationRequest(login, pass).then(res => {
            if(res.data.username)
                navigate('/login');
        })
    }

    return (
        <div>
            <h2 className="align-content-center">Регистрация</h2>
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
                    Зарегистрироваться
                </Button>
            </Form>
            <Link to="/login">Войти?</Link>
        </div>
    );
};

export default RegPage;