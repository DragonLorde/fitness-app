import React from 'react'
import styled from 'styled-components'


const Button = ({children , ...props}) => {
  return (
    <Btn
        {...props}
    >
        {children}
    </Btn>
  )
}


const Btn = styled.button`
    background: #7DEC6B;
    border: 1px solid #7DEC6B;
    box-sizing: border-box;
    border-radius: 12px;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    font-family: 'Roboto';
    padding: 10px 80px;
    transition: 0.4s ease-in-out;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
`;

export default Button