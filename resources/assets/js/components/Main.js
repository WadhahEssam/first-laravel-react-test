import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {

    constructor ( props ) {
        super( props ) ;
        this.state = { products : [] , } ;
    }

    componentDidMount () {
        fetch('/api/products')
        .then(response => {
            return response.json() ;
        }).then(products => {
            console.log(products[0]);
            this.setState({products});
        });
    }

    renderProducts () {
        return this.state.products.map( (product) => {
            return (
                <li key={product.id}>
                    {product.description}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    { this.renderProducts() }
                </ul>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
