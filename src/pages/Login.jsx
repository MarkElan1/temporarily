import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = 'aglksdj';

        signin(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton onClick={handleSubmit}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;