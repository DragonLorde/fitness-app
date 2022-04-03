import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import Form from '../../UI/Form/Form'
import Input from '../../UI/input/Input'
import API from '../../../API'

function AddTrainer() {

    const [trainer, setTrainer] = useState({
        name:"",
        firstName:"",
        age:"",
        stage:"",
        lastName:""
    });

    const onChange = (e) => {
        setTrainer((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const Fetch = async (e) => {
        e.preventDefault();
        const resp = await API.createTrainer(trainer);
        alert('trainer add');
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
            }}>Добавить <br /> тренера</h1>

            <Form>
                <>
                    <Input
                        name='name' 
                        text='Имя'
                        onChange={ onChange }
                        value={trainer.name}
                    />
                    <Input 
                        name='firstName'
                        text='Фамилия'
                        onChange={ onChange }
                        value={trainer.firstName}
                    />
                    <Input
                        name='age' 
                        text='Возраст'
                        onChange={ onChange }
                        value={trainer.age}
                    />
                </>
                <>
                    <Input
                        name='stage' 
                        text='Стаж'
                        onChange={ onChange }
                        value={trainer.stage}
                    />
                    <Input 
                        name='lastName'
                        text='Отчество'
                        onChange={ onChange }
                        value={trainer.lastName}
                    />
                </>
                <Button
                    onClick={Fetch}
                >Добавить</Button>
            </Form>
        </div>
    )
}

export default AddTrainer