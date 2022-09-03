import {createContext} from 'react'
import AuthStore from "../stores/authStore";

export interface IAutContext {
    authStore: typeof AuthStore
}

export const AuthContext = createContext<IAutContext|null>(null);