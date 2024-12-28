import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = (props) => {
    return (
        <Modal 
            isOpen={!!props.selectedOption} 
            //isOpen={props.isModalOpen}
            contentLabel="Selected Option"
            onRequestClose={props.handleOkay}
            closeTimeoutMS={200}
            className={'modal'}
        >
            <h3 className="modal__title">Selected option</h3>
            {props.selectedOption && <h3 className="modal__body">{props.selectedOption}</h3>}
            <button className="button" onClick={props.handleOkay}>okay</button>
        </Modal>
    )
}

export default OptionModal