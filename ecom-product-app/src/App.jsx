import './App.css'
import React from 'react'
import ProductList from './components/ProductList'
import Character from './components/Character.jsx'
import { useState } from 'react'

function App() {

  const [products, setProducts] = useState ([
    {
        id: 1,
        title: 'T-shirt',
        price: 100,
        description: "This is the best T-shirt you'll find. It is very comfortable and stylish. You can wear it anywhere.",
        image: 'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
        category: 'shirts 1',
        rating: {
            rate: 4.5,
            count: 10,
        },
    },
    {
        id: 2,
        title: 'Jeans',
        price: 200,
        description: "These jeans are rad. They are very comfortable and stylish. You'll never wanna take em off!",
        image: 'https://images.pexels.com/photos/1235692/pexels-photo-1235692.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'pants 2',
        rating: {
            rate: 3.5,
            count: 20,
        },
    },
    {
        id: 3,
        title: 'Ball-cap',
        price: 50,
        description: 'You can fight dragons wearing this ball-cap. It will protect you from the sun while also the flames of the dragon.',
        image: 'https://images.pexels.com/photos/2146723/pexels-photo-2146723.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'hats',
        rating: {
            rate: 4.5,
            count: 10,
        },
    },
]);

  return (
    <>
      <Character />
      <ProductList products={products}/>
      
    </>
  )
}

export default App
