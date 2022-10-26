import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css'; //이걸 import해줘야 css 적용되더라


function Popup({open, setPopup, message, title, callback}) {
    const handleClose = () => {
        setPopup({open: false});
        if(callback){
        callback();
        }
    }

    return (
        <>
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                OK
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Popup;
