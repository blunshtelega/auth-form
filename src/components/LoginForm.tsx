import React, { useState } from 'react';
import styled from "styled-components";
import Input from './UI/Input';
import LoginButton from './UI/LoginButton';
import { useForm, SubmitHandler } from "react-hook-form";
import { useGlobalContext } from '../context/authContext'
import { Checkbox } from './UI/Checkbox';
import { Users } from '../API/Users';
import Icon from './UI/Icon'

const Wrapper = styled.div`
    width: 640px;
    margin: 50px auto 0;
`;

const ErrorMessage = styled.span`
    display: block;
    margin-bottom: 20px;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F
`

const ErrorWrapper = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    background: #F5E9E9;
    border: 1px solid #E26F6F;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-family: 'Helvetica Neue', sans-serif;
`

interface IFormInputs {
    email: string
    password: string
    MyCheckbox: boolean
}

const LoginForm: React.FC = () => {
    const { setIsAuth } = useGlobalContext();
    const [isError, setIsError] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        setIsLoading(true);
        setTimeout(() => {
            const findUser = Users.find(user => user.email === data.email)
            if(findUser){
                setIsAuth(true);
                localStorage.setItem('auth', 'true')
                localStorage.setItem('email', (findUser.email))
            } else {
                setIsError(true);
                seterrorMessage(`Пользователя ${data.email} не существует`)
            }
            setIsLoading(false);
        }, 2000)
    }

    return (
        <Wrapper>
            {
            isError
                ? <ErrorWrapper><Icon></Icon>{errorMessage}</ErrorWrapper>
                : <div></div>
            }
            {        
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    style={{ border: errors.email ? '1px solid red' : '' }}
                    label="Логин"
                    registerName="email" 
                    register={register} 
                    required="Обязательно поле"
                    placeholder="steve.jobs@example.com"
                    type="email"
                    requiredText='Обязательно поле'
                    defaultValue="steve.jobs@example.com"
                />
                {errors.email && (
                    <ErrorMessage>
                        {errors.email.message}
                    </ErrorMessage>
                )}
                <Input 
                    style={{ border: errors.password ? '1px solid red' : '' }}
                    label="Пароль"
                    registerName="password" 
                    register={register} 
                    required="Обязательно поле"
                    placeholder="password"
                    type="password"
                    requiredText='Обязательно поле'
                    defaultValue="password"
                />
                {errors.password && (
                    <ErrorMessage>
                        {errors.password.message}
                    </ErrorMessage>
                )}
                <Checkbox></Checkbox>
                {
                isLoading
                ?   <LoginButton disabled={true} title="Идет авторизация"></LoginButton>
                :   <LoginButton disabled={false} title="Войти"></LoginButton>
                }

            </form>
            }
        </Wrapper>
    );
};

export default LoginForm;