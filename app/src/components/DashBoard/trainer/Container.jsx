import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import styled from 'styled-components'

function Container() {
  return (
    <ContainerLink>
      <div>
        <Link to='trainerList' > Список тренеров </Link>
        <Link to='addTrainer' > Добавить тренера </Link>
        <Link to='writeTrainer' > Записать к тренеру </Link>
      </div>
      <Outlet />
    </ContainerLink>
  )
}

const ContainerLink = styled.div`
  display: flex;
  div {
    background: #FFFFFF;
    box-shadow: 0px -1px 58px 8px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: flex;
    padding: 20px;
    margin: 10px;
    a {
      background: #7DEC6B;
      border-radius: 12px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #FFFFFF;
      padding: 10px;
      margin: 10px;
    }
  }
  flex-direction: column;
`;

export default Container