import { createContext, useContext } from "react";

export interface IAuthContent {
    isAuth: boolean;
    setIsAuth: any;
}

export const GlobalAuthContext = createContext<IAuthContent>({
    isAuth: false,
    setIsAuth: () => {},
})

export const useGlobalContext = () => useContext(GlobalAuthContext)