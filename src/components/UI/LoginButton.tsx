import React from "react";
import styled from "styled-components";

const CommonLoginButton = styled.button`
    width: 640px;
    height: 60px;
    background: #4A67FF;
    border-radius: 8px;
    color: #FFFFFF;
    border: 0;
    margin-top: 40px;
    font-family: 'Helvetica Neue', sans-serif;
    background: ${(props) => props.disabled ? "#99A9FF" : "#4A67FF"};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
`;
    
const LoginButtonWrapper = styled.div`
    display: flex;
`;

export interface ILoginButton {
    title: string;
    disabled: boolean;
}

const LoginButton: React.FunctionComponent<ILoginButton> = ({ disabled ,title }) => {
    return (
        <LoginButtonWrapper>
            <CommonLoginButton disabled={disabled}>{title}</CommonLoginButton>
        </LoginButtonWrapper>
    );
};

export default LoginButton;