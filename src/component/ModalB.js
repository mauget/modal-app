import React from 'react';
import {Button, Modal} from 'react-bootstrap'

const ModalB = ({fnIsShowModal, fnCloseModal, children}) =>
    <Modal show={fnIsShowModal()} onHide={fnCloseModal}>
        <Modal.Header closeButton={true}>
            <Modal.Title>Modal B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This is a pure function-based modal.
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={fnCloseModal}>Close</Button>
            <Button variant="primary" onClick={fnCloseModal}>OK</Button>
        </Modal.Footer>
    </Modal>
;

export default ModalB;
