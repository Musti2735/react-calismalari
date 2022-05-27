import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
    state = {
        categories:[]
    };

    componentDidMount(){
        this.getCategories();
    }
    getCategories =()=>{
        fetch("http://localhost:3000/categories")
        .then(Response=>Response.json())
        .then(data=>this.setState({categories:data}));;
    }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <p>{this.props.info.desc}</p>
                
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem onClick={() => this.props.changeCategory(category)} 
                            key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
         
        )
    }
}