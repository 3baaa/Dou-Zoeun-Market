import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';

Modal.setAppElement('#root');

const DaumPost = (props) => {
    
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const setAddress = props.setAddress;

    const handleComplete = (data) => {
        setAddress(data.address);
    }

    const handleClose = () => {
        setModalIsOpen(false);
    }
    /*
    modalIsOpen={true}
    setModalIsOpen={setModalIsOpen}
    setAddress={setAddress}
    */
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={handleClose}>
            <Button onClick={handleClose} style={{width:'100%'}}>창 닫기</Button><br/><br/>
            <DaumPostCode onComplete={handleComplete} onClose={handleClose} style={{width:'100%', height:'100%'}}/>
        </Modal>
    );
}

export default DaumPost;