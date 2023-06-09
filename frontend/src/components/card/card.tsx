import React, { useContext } from 'react'
import { AppContext } from '../../context';
import { User } from '../../interface'

import xIcon from "../../assets/x.png"
import grayStar from "../../assets/graystar.svg";
import greenStar from "../../assets/greenstar.svg";


import './card.css'

interface IProps {
    user: User
}

export const Card = ({ user }: IProps) => {
    const { toggle_star, removeUser } = useContext(AppContext);

    const { username, nome, avatar, url, star } = user;

    const starColor = () => {
        if (star)
            return greenStar;
        return grayStar;
    }

    return (
        <div className='card'>
            <img src={xIcon} className='x' onClick={() => { removeUser(username) }} alt={"Remover " + username} />
            <img src={avatar} alt={"Imagem de " + username} />
            <div className='cardData'>
                <h2>{nome}</h2>
                <h3>{username}</h3>
                <a href={url}>Perfil</a>
            </div>
            <div className="icons">
                <img className="starIcon" onClick={() => { toggle_star(username) }} src={starColor()} alt={"Favoritar " + username} />
            </div>
        </div>
    )
}
