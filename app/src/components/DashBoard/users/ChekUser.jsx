import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import Form from '../../UI/Form/Form'
import Input from '../../UI/input/Input'
import API from '../../../API'

function ChekUser() {

    const [id , setId] = useState('');

    const onChange = (e) => {
        setId(e.target.value);
    }

    const fetch = async (e) => {
        e.preventDefault();
        const resp = await API.checkUser(id);
        if(resp._id) {
            alert('user is active');
        } else {
            alert("user not found");
        }
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
            }}>Проверить <br /> посетителя</h1>

            <Form>
                <>
                    <Input 
                        text='ID'
                        name='id'
                        value={id}
                        onChange={onChange}
                    />
                </>
                <Button
                    onClick={fetch}
                >Проверить</Button>
            </Form>
        </div>
    )
}

export default ChekUser