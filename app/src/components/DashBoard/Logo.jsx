import React from 'react'
import styled from 'styled-components';

function Logo() {
  return (
    <Div>
        FITO
        <span>
            V1.0
        </span>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    color: #9FDD3B;
    align-items: baseline;
    span {
        padding: 10px;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #090909;
    }
`;

export default Logo