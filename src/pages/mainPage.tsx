import React, {useEffect, useState} from 'react';
import {Button, Form, Nav, Tooltip, OverlayTrigger, InputGroup} from "react-bootstrap";
import {squeezeRequest, statisticsRequest} from "../requests";
import AppNavbar from "../components/AppNavbar";
import StatisticTable from "../components/StatisticTable";
import AppSpinner from "../components/AppSpinner";
import {useStore} from "../hooks/useStore";

const MainPage = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [btnCopyText, setBtnCopyText] = useState("Скопировать");
    const context = useStore();
    const [tableData, setTableData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        statisticsRequest()
            .then((res)=>setTableData(res.data))
            .catch(e=>setError(e.message))
    },[])

    const handleBtnGetShortClick = () => {
        setIsLoading(true)
        squeezeRequest(longUrl)
            .then(res => {
                const shortUrlString = `${process.env.REACT_APP_API_HOST}/s/${res?.data?.short ?? 'Ошибка'}`
                setShortUrl(shortUrlString);
            })
            .catch(e=>setError(e.message))
            .finally(()=>setIsLoading(false))
    }

    const handleBtnCopyClick = async () => {
        await window.navigator.clipboard.writeText(shortUrl)
        setBtnCopyText("Текст скопирован")
        setTimeout(()=>setBtnCopyText("Скопировать"),1000)
    }

    const handleBtnExitClick = () => {
        localStorage.removeItem(String(process.env.REACT_APP_TOKEN_KEY))
        context?.authStore.setIsAuth(false)
    }

    return (
        <div>
            <AppNavbar>
                <Nav.Link onClick={handleBtnExitClick} >Выйти</Nav.Link>
            </AppNavbar>
            <br/>
            <div className="container">
                <h2>Страница авторизованного пользователя</h2>

                <Form >
                    <Form.Group className="mb-3" controlId="formLongUrl">
                        <Form.Label>Полная ссылка</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="https://translate.google.com/?sl=en&tl=ru&text=credentials&op=translate"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleBtnGetShortClick}>
                        { isLoading ? <AppSpinner/> : "Получить короткую ссылку"}
                    </Button>
                </Form>
                {!!error ?
                    <div>Произошла ошибка. Обновите страницу и попробуйте снова. Ошибка : {error}</div>
                    :
                    <>
                        {shortUrl &&
                            <div className="mt-lg-5">
                                <InputGroup>
                                    <Form.Control value={shortUrl} disabled readOnly placeholder="Короткая ссылка"/>
                                    <Button onClick={handleBtnCopyClick}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">{btnCopyText}</Tooltip>}
                                        >
                                            <span>Скопировать</span>
                                        </OverlayTrigger>
                                    </Button>
                                </InputGroup>
                            </div>
                        }
                        <h2 className="mt-lg-5">Статистика</h2>
                        <StatisticTable dataArray={tableData}/>
                    </>
                }

            </div>
        </div>

    );
};

export default MainPage;