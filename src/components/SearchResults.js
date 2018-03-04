import React, {Component} from 'react';
import ProductLine from "./ProductLine";

class SearchResults extends Component {
    constructor(props) {
        super(props);  // TODO-REM: forgot this.
        this.products = props.products;
    }

    render() {
        return(  // TODO-REM: open '(' must start in this line
        <div className="SearchResults">
            <tr>
                <th>Select</th>
                <th>Name</th>
                <th>Price(INR)</th>
            </tr>        
            {this.products.map((product, index) => {
                return <ProductLine product = {product}/>
            })}
        </div>)
    }
}

export default SearchResults;