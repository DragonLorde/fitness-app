import React from 'react'
import Logo from './Logo'
import styled from 'styled-components';
import InputContainer from './InputContainer';
import Exit from './Exit';

function Menu() {
  return (
    <Div>
        <Logo />
        <InputContainer />
        <Exit />
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.25);
`;

export default Menu