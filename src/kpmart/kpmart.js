import React, { Component } from 'react';
import logo from './kpmart.jpeg';
import './kpmart.css';
import '../data/Products.js';
import PRODUCTS from "../data/Products";
import Cart from "../components/Cart";
import ProductLine from "../components/ProductLine";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";

class KpMart extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} classNamec="App-logo" alt="logo"/>
                    <h1 className="App-title">One stop to all your needs.</h1>
                </header>
                <Cart />
                <SearchBar/>

                <SearchResults products = {PRODUCTS} />
               
            </div>
        );
    }
}




export default KpMart;
