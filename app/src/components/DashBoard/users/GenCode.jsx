import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import Form from '../../UI/Form/Form'
import Input from '../../UI/input/Input'
import api from '../../../API'

function GenCode() {
    
    const [code , setCode] = useState('');

    const fetch = async (e) => {
        e.preventDefault();
        const response = await api.updateLogin(code)
        alert(`
            Ваш новый код ${response.code}
        `)
    }

    const onChange = (e) => {
        setCode(e.target.value);
    }

    return (
        <div  style={{
        flexDirection:'column',
        overflow: 'hidden',
        height:'60vh',
        maxWidth:'60vw',
    }}>
        <h1 style={{
            fontFamily: 'Roboto',
            fontSize:'24px',
            fontWeight:'700',
            margin : '10px',
        }}>Сгененрировать <br /> код для входа</h1>

        <Form>
            <>
                <Input 
                    text='Код'
                    name='code'
                    value={code}
                    onChange={onChange}
                />
                
            </>
            <Button
                onClick={fetch}
            >Сгенерировать</Button>
        </Form>
    </div>
    )
}

export default GenCode