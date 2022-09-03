import {createContext, useContext} from 'react'
import authStore, {TAuthStore} from "../stores/authStore";
import {useLocalStore} from "mobx-react-lite";

//Какие данные попадают в контекст (в поле value)
export interface IStoreContext {
    authStore: TAuthStore
}

//Создаем контекст, с интерфесом, в  котором определены допустимые значения
export const StoreContext = createContext<IStoreContext|null>(null);

//Создаем StoreProvider здесь, чтобы не тащить в <App/> созданный контекс и все значения контекста к нему,
//
// *****Вместо записи :*****
//
// const store = useLocalStore(()=>({
//     authStore,
// }) )
// <StoreContext.Provider value={store}>
//      <App/>
// </StoreContext.Provider>
//
// *****Получаем:*****
//
//  <StoreProvider>
//      <App/>
//  </StoreProvider>
export const StoreProvider = ({ children }:any) => {
    const store = useLocalStore(()=>({
        authStore,
    }) )
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

//Чтобы везде где нужно получить данные с контекста
//не импортировать хук  useContext и сам контекст (StoreContext),
//создадм свой хук, где это будет обьеденено в одно место
// + проверка на ошибку
export const useStore = () => {
    const store = useContext(StoreContext)
    if (!store) {
        throw new Error('useStore должен быть использован только в пределах StoreProvider.')
    }
    return store
}