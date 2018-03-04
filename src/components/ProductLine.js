import React, { Component } from 'react';


class ProductLine extends Component {
    constructor(props) {
        super(props);
        this.product = props.product;
    }

    render() {
        return (<tr>
            <td><input type="checkbox" /></td>
            <td>{this.product.name}</td>
            <td>{this.product.price}</td>
        </tr>)
    }

}

export default ProductLine;