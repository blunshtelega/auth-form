import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.span`
    width: 100%;
    margin: 40px auto 250px;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #000000;
    display: flex;
    justify-content: center;
`;


const Logo: React.FC = () => {
    return (
        <LogoWrapper>ONLY.</LogoWrapper>
    )
}

export default Logo;