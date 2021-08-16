import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Jumbotron,
    Container,
    Row,
    Col,
    Media,
    Input
  } from 'reactstrap';

import './index.css';

class Content extends Component
{
    constructor(props) 
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen : false
        };
    }

    toggle() 
    {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render()
    {
        return (
            <div className="wrapper">
                <Navbar className="padded" color="dark" dark expand="md">
                    <NavbarBrand href="/"> 
                        <Media className="logo" src="public/raid-icons/Magtheridon.png" alt="mag" />Raid Layout
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>

                <Jumbotron className="content">
                    <Container>
                        <Row>
                            <Col>
                                <div className="arena rounded-circle">
                                    <Media className="arena-image-boss rounded-circle" src="public/raid-icons/Magtheridon.png" alt="mag" />

                                    <div className="imgContainer">

                                        <div className="raid-image square">
                                            <Media src="public/raid-icons/square.png" alt="Square" />
                                            <ol>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                            </ol>
                                        </div>

                                        <div className="raid-image moon">
                                            <Media src="public/raid-icons/moon.png" alt="Moon" />
                                            <ol>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                            </ol>
                                        </div>

                                    </div>

                                    <div className="imgContainer">

                                        <div className="raid-image circle">
                                            <Media src="public/raid-icons/circle.png" alt="Circle" />
                                            <ol>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                            </ol>
                                        </div>

                                        <div className="raid-image cross">
                                            <Media src="public/raid-icons/cross.png" alt="Cross" />
                                            <ol>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                                <li><Input type="text"></Input></li>
                                            </ol>
                                        </div>

                                    </div>

                                  
                                    <div className="raid-image skull">
                                        <Media src="public/raid-icons/skull.png" alt="Skull" />
                                        <ol>
                                            <li><Input type="text"></Input></li>
                                            <li><Input type="text"></Input></li>
                                            <li><Input type="text"></Input></li>
                                            <li><Input type="text"></Input></li>
                                        </ol>
                                    </div>

                                </div>
                            </Col>


                            <Col className="small bg-dark">
                                <Row>
                                    <Col>
                                        <div id="compass">
                                            <span id="north">N</span>
                                            <span id="east">E</span>
                                            <span id="south">S</span>
                                            <span id="west">W</span>
                                            
                                            <div id="pointerY"></div>
                                            <div id="pointerX"></div>
                                        </div>
                                    </Col>

                                    <div className="order">
                                        <h3 className="order-heading">Kill Order</h3>
                                        <ol className="order-list">
                                            <li><Media src="public/raid-icons/skull.png" alt="Circle" /></li>
                                            <li><Media src="public/raid-icons/cross.png" alt="Circle" /></li>
                                            <li><Media src="public/raid-icons/circle.png" alt="Circle" /></li>
                                            <li><Media src="public/raid-icons/square.png" alt="Circle" /></li>
                                            <li><Media src="public/raid-icons/moon.png" alt="Circle" /></li>
                                        </ol>  
                                    </div>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

// DOM
ReactDOM.render(
    <Content />,
    document.getElementById('root'),
);