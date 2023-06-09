import React, { useContext } from 'react'

import { Card } from '../card/card';

import { AppContext } from '../../context';
import { User } from '../../interface';






export const CardGrid = () => {
    const { userList } = useContext(AppContext);
    if (!userList)
        return <></>

    return (
        <>
            {userList.map((user: User) => (

                <Card key={user.username}user={user} />

            ))}
        </>
    )
}
