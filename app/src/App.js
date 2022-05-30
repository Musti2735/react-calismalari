import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import { NavLink, Route, Routes, useNavigate} from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  componentDidMount() {
    this.getProducts()
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addItem = newCart.find(c => c.product.id === product.id)
    if (addItem) {
      addItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })

  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

showCart = ()=>{
    console.log("/CartLİst")
  }


  render() {
    let categoryInfo = { title: "*Category List*", desc: "You may select category" };
    let productInfo = { title: "*Product List*", desc: "You may select product" };
    return (
      < div >
        <Container>
          <Navi
            cart={this.state.cart}
            products={this.state.products}
            removeFromCart={this.removeFromCart} 
            showMenu={this.showCart}/>
          <Row>
            <Col xs="3">
              <Category changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9"> 
          <Routes>
          <Route path="/" exact 
          render={props=>(
                        <Product
                        {...props}
                        addToCart={this.addToCart}
                        products={this.state.products}
                        currentCategory={this.state.currentCategory}
                        info={productInfo} 
                        />
          )}>
            </Route>

            <Route path="/NotFound" element={<NotFound/>}>
            </Route>
            <Route path="/CartList" element={<CartList/>}>
            </Route>
          </Routes>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}


