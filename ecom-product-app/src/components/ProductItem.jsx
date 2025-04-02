import React from 'react';

const ProductItem = ({ product }) => {

    return (
            <div className = "product-card" key={product.id}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.image} alt={product.title} />
            </div>
    )
}

export default ProductItem;