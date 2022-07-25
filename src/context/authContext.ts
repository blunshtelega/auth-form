import React, { createContext, useContext } from "react";

export interface IAuthContent {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalAuthContext = createContext<IAuthContent>({
    isAuth: false,
    setIsAuth: () => {},
})

export const useGlobalContext = () => useContext(GlobalAuthContext)