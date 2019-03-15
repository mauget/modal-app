

import React, {Component} from 'react';
import {
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import ModalA from './ModalA';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showA: false,
            showB: false,
            showC: false
        };

        this.isShowModalA = this.isShowModalA.bind(this);

        this.showModalA = this.showModalA.bind(this);
        this.showModalB = this.showModalB.bind(this);
        this.showModalC = this.showModalC.bind(this);

        this.closeModalA = this.closeModalA.bind(this);
    }


    isShowModalA() {
        return this.state.showA;
    }


    showModalA() {
        this.setState({showA: true});
    }


    closeModalA() {
        this.setState({showA: false});
    }



    showModalB() {
        this.setState({showB: true});
    }


    showModalC() {
        this.setState({showC: true});
    }


    render() {

        console.log(`showA is ${this.state.showA}`);

        return (
            <>
                <Card>
                    <Card.Header>
                        <Card.Title>Modal Launcher</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row><Col><Button onClick={this.showModalA}>Modal A</Button></Col></Row>
                        <Row><Col><Button onClick={this.showModalB} disabled={true}>Modal B</Button></Col></Row>
                        <Row><Col><Button onClick={this.showModalC} disabled={true}>Modal C</Button></Col></Row>
                    </Card.Body>
                    <Card.Footer>
                        <h5>Copyright - &copy; 2019</h5>
                    </Card.Footer>
                </Card>

                <ModalA isShowModalFn={this.isShowModalA} closeModalFn={this.closeModalA}/>

            </>
        );
    }
}

export default Main;
