import React from 'react';
import  Logo from './Logo';
import { Jumbotron, Nav, Navbar, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Jumbotron fluid className="mb-0">
                    <div className="container">
                        <div classname="row">
                            <div className="col-sm-2">
                            </div> 
                            <div className="col-4 col-sm-3 col-md-2 align-self-center" >
                                <Logo />
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar color="dark" dark sticky="top" expand="sm" className="mt-0">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            home
                                        </NavLink>                                        
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/about">
                                            about
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menus">
                                            menus
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/shop">
                                            shop
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            contact us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <span className="ml-auto">
                                    <Button onClick={this.toggleModal}>
                                        <i className="fa fa-sign-in" /> Member Sign In
                                    </Button>
                                </span>                            
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
                    <ModalHeader>
                        <h3>Member Sign In</h3>
                        <Button type="button" className="ml-auto" onClick={this.toggleModal}>
                        <span aria-hidden="true">&times;</span>
                        </Button>
                    </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="email">Email:</Label>
                                    <Input type="text" id="email" name="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password:</Label>
                                    <Input type="text" id="password" name="password" />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember" />
                                        Remember Me
                                    </Label> 
                                    <span>                               
                                        <Button type="button" className="btn btn-secondary btn-sm m-2" onClick={this.toggleModal}>Cancel</Button>
                                        <Button type="submit" className="btn btn-success btn-sm m-2">Sign In</Button>
                                    </span>
                                </FormGroup>
                            </Form>
                        </ModalBody>

                </Modal>


            </React.Fragment>
        );
    };
}

export default Header;