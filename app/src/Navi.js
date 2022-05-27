import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" light>
                    <NavbarBrand href="/">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="me-auto" navbar >
                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <CartSummary 
                            cart={this.props.cart} 
                            removeFromCart={this.props.removeFromCart} />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

