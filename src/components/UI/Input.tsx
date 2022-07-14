import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommonInput = styled.input`
    width: 100%;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    text-indent: 20px;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

const CommonInputLabel = styled.label`
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
    margin-bottom: 10px;
`;

export interface IInput {
    style: any
    registerName: string,
    label: string,
    register: any,
    required: string,
    requiredText: string,
    placeholder: string,
    type: string,
    defaultValue: string,
}

const Input: React.FunctionComponent<IInput> = (props) => {
    const register = props.register;

    return (
        <InputWrapper>
            <CommonInputLabel>{props.label}</CommonInputLabel>
            <CommonInput 
                {...register(props.registerName, { required: props.requiredText })} 
                placeholder={props.placeholder}
                style={props.style}
                type={props.type}
                defaultValue={props.defaultValue}
            />
        </InputWrapper>
    );
};

export default Input;