import MainPage from "../pages/mainPage";
import LoginPage from "../pages/loginPage";
import RegPage from "../pages/regPage";


export const publicRoutes = [
    {key: 1, path: "/login", element: LoginPage},
    {key: 2, path: "/reg", element: RegPage},
]

export const privateRoutes = [
    {key: 1, path: "/main", element: MainPage},
]