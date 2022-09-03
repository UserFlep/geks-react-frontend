import {createContext, ReactNode} from 'react'
import AuthStore from "../stores/authStore";
import {useLocalStore} from "mobx-react-lite";

//Какие данные попадают в контекст (в поле value)
export interface IStoreContext {
    authStore: typeof AuthStore,
}

//Создаем контекст, с интерфесом, в  котором определены допустимые значения
export const StoreContext = createContext<IStoreContext|null>(null);

//Создаем StoreProvider здесь, чтобы не тащить в <App/> созданный контекс и все значения контекста к нему,
//
// *****Вместо записи :****************************************
//
// const store = useLocalStore(()=>({
//     authStore,
// }) )
// <StoreContext.Provider value={store}>
//      <App/>
// </StoreContext.Provider>
//
// *****Получаем:**********************************************
//
//  <StoreProvider>
//      <App/>
//  </StoreProvider>
interface IStoreProviderProps {
    children?: ReactNode
}
export const StoreProvider = ({ children }: IStoreProviderProps) => {
    //В store помещаем значения согласно IStoreContext
    const store = useLocalStore(()=>({
        authStore: AuthStore,
    }))
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

