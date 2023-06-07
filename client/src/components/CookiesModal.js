import React from 'react'
import { useState } from 'react'; //this can be refactored 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CookiesModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                cookie policy
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cookies</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is where the cookie policy goes </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CookiesModal