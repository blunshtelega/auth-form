import React, { useState } from "react";
import { GlobalAuthContext } from "./context/authContext";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";

const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <GlobalAuthContext.Provider value= {{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </GlobalAuthContext.Provider>
    );
}

export default App