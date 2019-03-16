import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';


class ModalA extends Component {

    constructor(props) {
        super(props);

        const {title, fnIsShowModal, fnCloseModal, labelOK, labelCancel} = props;
        this.state = {
            title: title || 'Class Modal',
            fnIsShowModal: fnIsShowModal,
            fnCloseModal: fnCloseModal,
            labelOK: labelOK,
            labelCancel: labelCancel
        };
    }


    render() {
        console.log(`ModalA props.children`, this.props.children);
        return (
            <Modal show={this.state.fnIsShowModal()} onHide={this.state.fnCloseModal}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is a class-based component modal.
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.state.fnCloseModal}>{this.state.labelCancel || 'Cancel'}</Button>
                    <Button variant="primary" onClick={this.state.fnCloseModal}>{this.state.labelOK || 'OK'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalA.propTypes = {
    title: PropTypes.string,
    fnIsShowModal: PropTypes.func.isRequired,
    fnCloseModal: PropTypes.func.isRequired
};

export default ModalA;
