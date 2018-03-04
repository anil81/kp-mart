import React, { Component } from 'react';
import logo from './kpmart.jpeg';
import './component.css';
import '../data/Products.js';
import PRODUCTS from "../data/Products";
import ProductLine from "../components/ProductLine";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">One stop to all your needs.</h1>
                    <div className="cart">CART 0 added.</div>
                </header>
                <div>

                    <div className="SearchBar">
                        Search <input type="text"/>
                        <input type="button" value={"Add to Cart"}/>
                    </div>

                </div>

                <div className="SearchResults">
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Price(INR)</th>
                    </tr>

                    {PRODUCTS.map((product, index) => {
                        return <ProductLine product = {product}/>
                    })}

                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Sofa</td>
                        <td>300</td>
                    </tr>

                </div>
            </div>
        );
    }
}




export default App;
