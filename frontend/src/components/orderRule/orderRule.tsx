import React, { useContext } from 'react'
import { AppContext } from '../../context'
import './OrderRule.css'


export const OrderRule = () => {
    const { alfabeticalOrder, setAlfabeticalOrder } = useContext(AppContext);
    const buttonText = () => {
        if (alfabeticalOrder)
            return "Ordenar por inclusão"
        return "Ordenar alfabeticamente"
    }
    const toggleOrderRule = () => {
        setAlfabeticalOrder(!alfabeticalOrder);
    }

    return (<div className='OrderRuleButtonContainer'>

        <button className='OrderRuleButton' onClick={toggleOrderRule}>{buttonText()}</button>
    </div>
    )
}
