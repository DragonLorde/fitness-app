import React from 'react'
import Form from '../../UI/Form/Form'
import Input from '../../UI/input/Input'
import styled from 'styled-components'
import Button from '../../UI/Button/Button'

function TrainAdd() {

    const handler = (e) => {
        e.preventDefault();
        alert('записан на тренеровку');
    }

    return (
        <Div>
            <h1 style={{
                fontFamily: 'Roboto',
                fontSize:'24px',
                fontWeight:'700',
                margin : '10px',
            }}>Запись к тренеру</h1>
            <Form>
                <Input 
                    text='Код посетителя'
                />
                <Input 
                    text='ID тренера'
                />
                <Button
                    onClick={handler}
                >Добавить</Button>
            </Form>
        </Div>
    )
}

const Div = styled.div`
    width: 60vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
`;

export default TrainAdd