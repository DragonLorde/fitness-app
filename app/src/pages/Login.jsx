import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/input/Input';
import api from '.././API';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigator = useNavigate();
    const [login , setLogin] = useState('');
    const [error, setError] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('isLogin')) {
            navigator('/')
        }
    }, [])

    useEffect(() => {
        if(login.length < 4) {
            setError(true);
        } else {
            setError(false);
        }
        console.log(error)
    }, [login])

    const onChange = (e) => {
        setLogin(e.target.value);
    }
    
    const fetchLogin = async (e) => {
        e.preventDefault();
        const response = await api.sendLogin(login);
        if(response === null) {
            alert('login invalid');
            return;
        }
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('codeData', JSON.stringify(response));
        navigator('/');
    }

    return (
        <Div>
            <Form action='' >
                <div className="logo">
                    <h1 className="logo__tag"> 
                        FITO
                    </h1 >
                    <p className='logo__by'>by</p>
                    <p className="logo__name">
                        Kugaevsky-soft
                    </p>
                </div>
                <Input
                    onChange={onChange}
                    text={'Код для входа'}
                    value={login}
                    name='login'
                    className={ error ? 'error_button' : ' ' }
                />
                <Button
                    onClick={fetchLogin}
                    type="submit"
                >
                    Войти
                </Button>
            </Form>
        </Div>
    )
}



const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 1px 13px 2px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    height: 20rem;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
    .logo {
        font-family: 'Roboto';
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.1em;
        &__tag {
            font-weight: 700;
            font-size: 64px;

            color: #9FDD3B;
        }
        &__by {
            font-weight: 700;
            font-size: 36px;
            line-height: 42px;

            color: #8C3BDD;
        }
        &__name {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;

            color: #000000;
        }
    }
`;

export default Login