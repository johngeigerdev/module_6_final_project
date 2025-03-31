import React from 'react'
import { useState } from 'react'

function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image || 'https://via.placeholder.com/150'} alt={product.title || 'Placeholder'} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList
