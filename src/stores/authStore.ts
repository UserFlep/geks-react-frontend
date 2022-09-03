import {makeAutoObservable} from "mobx";


export class AuthStore {
    isAuthFlag: boolean = !!localStorage.getItem(String(process.env.REACT_APP_TOKEN_KEY));

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth (flag: boolean) {
        this.isAuthFlag = flag;
    }

    get isAuth(){
        return this.isAuthFlag;
    }
}
export default new AuthStore()