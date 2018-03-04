import React, {Component} from 'react';

class SearchBar extends Component {

    render() {
        return(
            <div>
                <div className="SearchBar">
                    Search <input type="text"/>
                    <input type="button" value={"Add to Cart"}/>
                </div>
            </div>);
    }
}

export default SearchBar;