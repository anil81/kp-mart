import React, { Component } from 'react';


function ProductLine (props) {
        return (<tr>
            <td><input type="checkbox" /></td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>)

}

export default ProductLine;