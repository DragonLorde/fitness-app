import React from 'react'
import styled from 'styled-components'

function Form({children , ...props}) {
  return (
    <FormContainer {...props}>
        {children}
    </FormContainer>
  )
}

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    input {
        display: flex;
        flex:  1 1 80%;
    }
`;

export default Form