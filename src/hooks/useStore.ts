import {useContext} from "react";
import {StoreContext} from "../context";

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