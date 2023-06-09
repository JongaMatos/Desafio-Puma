import React, { useState, BaseSyntheticEvent, useContext } from 'react'

import { AppContext } from '../../context';
import fetchUser from '../../services/githubApi';

export const Form = () => {

    const [username, setUsername] = useState("");
    const { userList, addUser } = useContext(AppContext);

    const handleChange = (e: BaseSyntheticEvent) => {
        setUsername(e.target.value);
    };
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        if (userList)
            if (userList.findIndex(user => user.username == username) > -1)
                console.log(username + " ja esta cadastrado")
            else
                console.log("cadastrar")
                addUser(username);
                console.log(username);
    };

    const fetch = async () => {
        try {
            const response = await fetchUser(username);
            if (response.username === '-1')
                console.log("usuário inexistente")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username: </label>
                <input
                    type="text"
                    id="name"
                    value={username}
                    onChange={handleChange}
                />
                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    )
}
