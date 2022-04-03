import React from 'react'
import styled from 'styled-components'


const Input = ( {text, value , onChange, name, className} ) => {
    return (
      <Inp
          className={className}
          value={value}
          onChange={onChange} 
          placeholder={text}
          name={name}
          required
      />
    )
}

const Inp = styled.input`
    font-family: 'Roboto';
    border: 1px solid #7DEC6B;
    border-radius: 12px;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    padding: 10px 10px;
`;

export default Input