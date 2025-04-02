import React from 'react';
import ProductItem from './ProductItem.jsx';

const ProductList = ({ products }) => {

    return (
        <div className="product-list">
            <h1 className='heading'>Product List</h1>
            <div className="cards-container">
                {products.map(product => (
                <ProductItem key={product.id} product={product} />
                ))}
            </div>
            
        </div>
    )
}

export default ProductList;

