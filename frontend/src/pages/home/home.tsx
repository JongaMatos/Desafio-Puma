import React, { useContext } from 'react'
import { Form } from '../../components/form/form'
import { CardGrid } from '../../components/cardGrid/cardGrid'
import Modal from '../../components/modal/modal'

import { AppContext } from '../../context'
export const Home = () => {

    const { modalStatus } = useContext(AppContext);

    // if (modalStatus)

    return (
        <>
            <Modal />
            <Form></Form>
            <CardGrid />
        </>
    )
}
