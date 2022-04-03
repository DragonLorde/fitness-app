import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from './trainer/Container'

function InputContainer() {
  return (
    <LinkContainer>
        <Link to='trainer' > Тренера </Link>
        <Link to='users' > Посетители </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    width: 80%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    background: #6BAEEC;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 10px;
  }
`;

export default InputContainer