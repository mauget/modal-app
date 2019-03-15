import React, {Component} from 'react';
import {
    Button,
    Modal,
} from 'react-bootstrap'


class ModalA extends Component {

    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);

        const {isShowModalFn, closeModalFn} = props;
        this.state = {
            closeModalFn: closeModalFn,
            isShowModalFn: isShowModalFn
        };
    }


    handleClose() {
        this.setState({show: false});
        this.state.toggleModal();
    }


    render() {

        return (
            <>
                <Modal show={this.state.isShowModalFn()} onHide={this.state.closeModalFn}>
                    <Modal.Header>
                        <Modal.Title>Modal A</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This text rendered in a modal.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.state.closeModalFn}>Close</Button>
                        <Button variant="primary" onClick={this.state.closeModalFn}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalA;
