import React, { Component } from 'react';
import api from '../../services/api'

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/');

        this.setState({ products: response.data})

        console.log(response.data)
    };

    render() {
        // return <h1>Contagem: {this.state.products.length}</h1>;
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2>{product.Duration}</h2>
                ))}
            </div>
        )
    }
}