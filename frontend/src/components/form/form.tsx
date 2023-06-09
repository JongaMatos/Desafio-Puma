import React, { useState, BaseSyntheticEvent, useContext } from 'react'

import { AppContext } from '../../context';
import './form.css'

export const Form = () => {

    const [username, setUsername] = useState("");
    const { addUser } = useContext(AppContext);

    const handleChange = (e: BaseSyntheticEvent) => {
        setUsername(e.target.value);
    };
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        addUser(username);
    };


    return (
        <form className='forms' onSubmit={handleSubmit}>
            <label htmlFor="name">Nome de Usuário</label>
            <input
                type="text"
                id="name"
                value={username}
                onChange={handleChange}
            />
            <button type="submit">
                Adicionar
            </button>
        </form>
    )
}
