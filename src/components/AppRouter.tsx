import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {privateRoutes, publicRoutes} from "../routes";
import {Container} from "react-bootstrap";
import {useStore} from "../hooks/useStore";

const AppRouter = observer(() => {
    const context = useStore();
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