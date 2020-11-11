import React from 'react';
import  Logo from './Logo';
import { Jumbotron, Nav, Navbar, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
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
                                    <Button>
                                        <i className="fa fa-sign-in" /> Member Sign In
                                    </Button>
                                </span>                            
                        </Collapse>
                    </div>
                </Navbar>

            </React.Fragment>
        );
    };
}

export default Header;