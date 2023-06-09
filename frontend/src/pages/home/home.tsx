import React from 'react'
import { Form } from '../../components/form/form'
import { CardGrid } from '../../components/cardGrid/cardGrid'
import { OrderRule } from '../../components/orderRule/orderRule'
import Modal from '../../components/modal/modal'

export const Home = () => {

    return (
        <>
            <Modal />
            <Form></Form>
            <OrderRule/>
            <CardGrid />
        </>
    )
}
