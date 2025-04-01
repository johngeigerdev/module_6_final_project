

import React from 'react';


function ProductList({ Products }) {
    return (
        <div className="cards-container">
            {Products.map((product) => (
                <div className = "product-card" key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>   
                
            ))}
        </div>
    );
}

export default ProductList;

