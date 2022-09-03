import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "../routes";
import {Container} from "react-bootstrap";

const AppRouter = observer(() => {
    const context = useContext(AuthContext);
    return (
        <Container fluid={'sm'}>
            {context?.authStore.isAuth
            ?
            <Routes>
                {privateRoutes.map(({key, path, element: Component})=><Route key={key} path={path} element={<Component/>}/>)}
                <Route
                    path="*"
                    element={<Navigate to="/main" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(({key, path, element: Component})=><Route key={key} path={path} element={<Component/>}/>)}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
            }
        </Container>
    );
});

export default AppRouter;