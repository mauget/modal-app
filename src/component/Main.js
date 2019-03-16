import React, {Component} from 'react';
import {
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import ModalA from './ModalA';
import ModalB from './ModalB';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showA: false,
            showB: false,
            showC: false,
            showD: false
        };

        this.isShowModalA = this.isShowModalA.bind(this);
        this.showModalA = this.showModalA.bind(this);
        this.closeModalA = this.closeModalA.bind(this);

        this.isShowModalB = this.isShowModalB.bind(this);
        this.showModalB = this.showModalB.bind(this);
        this.closeModalB = this.closeModalB.bind(this);


        this.isShowModalC = this.isShowModalC.bind(this);
        this.showModalC = this.showModalC.bind(this);
        this.closeModalC = this.closeModalC.bind(this);

        this.isShowModalD = this.isShowModalD.bind(this);
        this.showModalD = this.showModalD.bind(this);
        this.closeModalD = this.closeModalD.bind(this);

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


    isShowModalB() {
        return this.state.showB;
    }

    showModalB() {
        this.setState({showB: true});
    }

    closeModalB() {
        this.setState({showB: false});
    }


    isShowModalC() {
        return this.state.showC;
    }

    showModalC() {
        this.setState({showC: true});
    }

    closeModalC() {
        this.setState({showC: false});
    }


    isShowModalD() {
        return this.state.showD;
    }

    showModalD() {
        this.setState({showD: true});
    }

    closeModalD() {
        this.setState({showD: false});
    }


    render() {

        return (
            <>
                <Card className={"main-card"}>
                    <Card.Header>
                        <Card.Title>Modal Launcher</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Button onClick={this.showModalA} autoFocus={true}>Modal A</Button></Col>
                            <Col><Button onClick={this.showModalC}>Modal C</Button></Col>
                        </Row>
                        <Row>
                            <Col><Button onClick={this.showModalB}>Modal B</Button></Col>
                            <Col><Button onClick={this.showModalD}>Modal D</Button></Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <h5>Copyright - &copy; 2019</h5>
                    </Card.Footer>
                </Card>

                <ModalA fnIsShowModal={this.isShowModalA} fnCloseModal={this.closeModalA}/>

                <ModalB fnIsShowModal={this.isShowModalB} fnCloseModal={this.closeModalB}/>

                <ModalA fnIsShowModal={this.isShowModalC} fnCloseModal={this.closeModalC}>
                    <ol>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ol>
                </ModalA>

                <ModalB fnIsShowModal={this.isShowModalD} fnCloseModal={this.closeModalD}>
                    <table>
                        <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Lou Mauget</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>East Lansing</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>MI</td>
                        </tr>
                        <tr>
                            <td>Zip</td>
                            <td>48024</td>
                        </tr>
                        </tbody>
                    </table>
                </ModalB>

            </>
        );
    }
}

export default Main;
