import React, { useState, BaseSyntheticEvent, useContext } from 'react'

import { AppContext } from '../../context';
import fetchUser from '../../services/githubApi';

import './form.css'

export const Form = () => {

    const [username, setUsername] = useState("");
    const { userList, addUser } = useContext(AppContext);

    const handleChange = (e: BaseSyntheticEvent) => {
        setUsername(e.target.value);
    };
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        // if (userList)
        //     if (userList.findIndex(user => user.username == username) > -1)
        //         console.log(username + " ja esta cadastrado")
        //     else
        //         console.log("cadastrar")
        addUser(username);
        console.log(username);
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
