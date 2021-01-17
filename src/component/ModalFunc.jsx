import React from 'react';
import {Button, Modal} from 'react-bootstrap'

const ModalFunc = ({title, fnIsShowModal, fnCloseModal, children, labelCancel, labelOK}) =>
    <Modal show={fnIsShowModal()} onHide={fnCloseModal}>
        <Modal.Header closeButton={true}>
            <Modal.Title>{title || 'Modal B'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children || 'This is a function-based component modal.'}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={fnCloseModal}>{labelCancel || 'Cancel'}</Button>
            <Button variant="primary" onClick={fnCloseModal}>{labelOK || 'OK'}</Button>
        </Modal.Footer>
    </Modal>
;

export default ModalFunc;
