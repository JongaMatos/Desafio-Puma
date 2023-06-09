import React from 'react'
import { Form } from '../../components/form/form'
import { CardGrid } from '../../components/cardGrid/cardGrid'
import Modal from '../../components/modal/modal'

export const Home = () => {

    return (
        <>
            <Modal />
            <Form></Form>
            <CardGrid />
        </>
    )
}
