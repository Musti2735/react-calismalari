
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";




export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav >
                    <DropdownToggle nav>
                        Cart - {"You have " + this.props.cart.length + " products on your cart"} 
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> X </Badge>
                                {cartItem.product.productName}
                                <Badge color="success" >{cartItem.quantity}</Badge>
                            </DropdownItem> 
                        ))}
                        <DropdownItem divider />
                        <DropdownItem onClick={()=>this.props.showCart}>
                            Show the Cart
                        </DropdownItem>
                       
                    </DropdownMenu >

                </UncontrolledDropdown>
            </div>
        )
    }
}
