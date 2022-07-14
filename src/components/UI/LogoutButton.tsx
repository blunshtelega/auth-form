import React from "react";
import styled from "styled-components";

const CommonLogoutButton = styled.button`
    width: 200px;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    color: #000000;
    border: 0;
    margin-top: 50px;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
`;

const LogoutButtonWrapper = styled.div`
    display: flex;
    margin: 0 auto;
`;

export interface ILogoutButton {
    title: string;
    onClick?: any;
}

const LogoutButton: React.FunctionComponent<ILogoutButton> = ({ title, onClick }) => {

    return (
        <LogoutButtonWrapper>
            <CommonLogoutButton onClick={onClick}>{title}</CommonLogoutButton>
        </LogoutButtonWrapper>
    );
};

export default LogoutButton;