import React, { useContext } from 'react';
// import Modal from "react-overlays/Modal";
import Modal from "react-modal";


import { AppContext } from '../../context';
import './modal.css'


const ModalOverlay = () => {
    const { modalMessage, modalStatus, resetModal } = useContext(AppContext);

    return (
        <Modal
            id='modal'
            isOpen={modalStatus}
        >
                <h2>{modalMessage}</h2>

                <button onClick={resetModal} >Fechar</button>
        </Modal>
    )
}
export default ModalOverlay;
