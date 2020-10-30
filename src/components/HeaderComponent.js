import React from 'react';
import { Jumbotron, Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, Button } from 'reactstrap';


class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state= {
            isNavOpen: false,
        };

        //this.toggleNav = this.toggelNav.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

//logo not working
//Navbar not populating
    render() {
        return (
            <React.Fragment>

                <Jumbotron fluid>
                    <div className="container">
                        <div classname="row">
                            <div className="col-sm-2">
                            </div> 
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <img src=".../public/images/logos/vBeanLogo/png" className="img-fluid ml-2" alt="vBeanLogo" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="sm">
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
                                <span className="navbar-text ml-auto">
                                    <Button>
                                        <i className="fa fa-sign-in" /> Member Sign In
                                    </Button>
                                </span>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            </React.Fragment>
        );
    };
}

export default Header;