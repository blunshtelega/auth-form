import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const Login: React.FC = () => {
    return (
        <div>
            <Logo></Logo>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login;