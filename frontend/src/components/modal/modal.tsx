import React, { useContext } from 'react';
import Modal from "react-overlays/Modal";

import { AppContext } from '../../context';
import './modal.css'

// const renderBackdrop = (props: any) => <div className="backdrop" {...props} />;

const ModalOverlay = () => {
    const { modalMessage, modalStatus, resetModal } = useContext(AppContext);

    return (
        <Modal
            className='modal'
            show={modalStatus}
            // renderBackdrop={renderBackdrop}
        >
            <div className='innerbox'>
                <h2>{modalMessage}</h2>

                <button onClick={resetModal} >Fechar</button>
            </div>
        </Modal>
    )
}
export default ModalOverlay;
