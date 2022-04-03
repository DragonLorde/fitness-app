import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

function Exit() {

    const navigator = useNavigate();
    const logOut = () => {
        localStorage.clear('');
        navigator('/login');
    }

    return (
        <Div>
            <button 
            onClick={logOut}
            >Выйти</button>
        </Div>
    )
}

const Div = styled.div`
    margin-top: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        padding: 10px;
        width: 90%;
        background: #EC6B6B;
        border-radius: 12px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;

        color: #FFFFFF;
    }
`;

export default Exit