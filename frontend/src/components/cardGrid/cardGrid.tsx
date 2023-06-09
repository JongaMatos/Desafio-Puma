import React, { useContext } from 'react'

import { AppContext } from '../../context';
import { User } from '../../interface';
import { Card } from '../card/card';


import './cardGrid.css'

export const CardGrid = () => {
    const { userList } = useContext(AppContext);
    if (!userList)
        return <></>

    return (
        <div className='cards'>
            {userList.map((user: User) => (

                <Card key={user.username} user={user} />

            ))}
        </div>
    )
}
