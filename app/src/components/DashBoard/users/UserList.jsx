import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import API from '../../../API'

function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await API.getAllUser();
        setUsers(response);
    }, []);


    return (
        <div style={{
            flexDirection:'column',
            overflow: 'hidden',
            overflowY:'scroll',
            height:'60vh',
            width: '60vw',
        }}>
            <h1 style={{
            fontFamily: 'Roboto',
            fontSize:'24px',
            fontWeight:'700',
            margin : '10px',
            }} >Список тренеров</h1>
            <div style={{
                boxShadow:'initial',
                display: 'fkex',
                flexDirection:'column',
            }}>
                {
                    users.map((user,index)=>
                        <TrainerContainer key={user}> {++index} <span> {user.name} </span> {user.firstName} <span> Возраст: {user.age} </span> <span> ID: {user._id} </span>   </TrainerContainer>
                    )
                }
            </div>
        </div>
    )
}


const TrainerContainer = styled.p`
    display: flex;
    align-items: center;
    margin: 2px;
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
        span {
            padding: 10px;
        }
`;

export default UserList