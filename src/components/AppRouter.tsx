import React from 'react';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useGlobalContext } from '../context/authContext'
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const AppRouter: React.FC = () => {
    const { isAuth } = useGlobalContext();
    return (
        isAuth
        ?
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="/*" element={<Navigate replace to="/profile" />} />
        </Routes>
        :
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate replace to="/login" />} />
        </Routes>
    );
};

export default AppRouter;