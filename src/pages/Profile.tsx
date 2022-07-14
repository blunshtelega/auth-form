import React from 'react';
import Logo from '../components/Logo';
import { useGlobalContext } from '../context/authContext'
import styled from "styled-components";
import LogoutButton from '../components/UI/LogoutButton';

const ProfileWrapper = styled.span`
    width: 100%;
    font-family: 'Helvetica Neue',sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const HelloMessageWrapper = styled.span`
    font-family: 'Helvetica Neue',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
`

const Profile: React.FC = () => {
    const { isAuth, setIsAuth } = useGlobalContext();
    const userEmail = localStorage.getItem('email')

    const logout = () => {
        setIsAuth(false);
        console.log(isAuth);
        localStorage.setItem('auth', 'false')
    }

    return (
        <div>
            <Logo></Logo>
            <ProfileWrapper>
                <HelloMessageWrapper>Здравствуйте, {userEmail}</HelloMessageWrapper>
                <LogoutButton onClick={logout} title="Выйти"></LogoutButton>
            </ProfileWrapper>
        </div>
    );
};

export default Profile;