import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import Form from '../../UI/Form/Form'
import Input from '../../UI/input/Input'
import API from '../../../API'

function AddUser() {

    const [user, setUser] = useState({
        name:"",
        firstName:"",
        age:"",
    });

    const onChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const Fetch = async (e) => {
        e.preventDefault();
        const resp = await API.addUser(user);
        alert('user add');
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
        }}>Добавить <br /> посетителя</h1>

        <Form>
            <>
                <Input 
                    text='Имя'
                    name='name'
                    onChange={ onChange }
                    value={user.name}
                />
                <Input 
                    name='firstName'
                    text='Фамилия'
                    onChange={ onChange }
                    value={user.firstName}
                />
                <Input 
                    name='age'
                    text='Возраст'
                    onChange={ onChange }
                    value={user.age}
                />
            </>
            <Button
                onClick={Fetch}
            >Добавить</Button>
        </Form>
    </div>
    )
}

export default AddUser