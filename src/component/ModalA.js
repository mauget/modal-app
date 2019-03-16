import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';


class ModalA extends Component {

    constructor(props) {
        super(props);

        const {fnIsShowModal, fnCloseModal} = props;
        this.state = {
            fnIsShowModal: fnIsShowModal,
            fnCloseModal: fnCloseModal
        };
    }


    render() {
        return (
            <Modal show={this.state.fnIsShowModal()} onHide={this.state.fnCloseModal}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Modal A</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is a class-based modal.
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.state.fnCloseModal}>Close</Button>
                    <Button variant="primary" onClick={this.state.fnCloseModal}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalA.propTypes = {
    fnIsShowModal: PropTypes.func.isRequired,
    fnCloseModal: PropTypes.func.isRequired
};

export default ModalA;
