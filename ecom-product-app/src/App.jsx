import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import React from 'react'



function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'T-shirt',
      price: 100,
      description: 'This is the best T-shirt you\'ll find. It is very comfortable and stylish. You can wear it anywhere.',
      image: 'https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'shirts 1',
      rating: {
        rate: 4.5,
        count: 10
      }
    },
    {
      id: 2,
      title: 'Jeans',
      price: 200,
      description: 'These jeans are rad. They are very comfortable and stylish. You\'ll never wanna take em off!',
      image: 'https://images.pexels.com/photos/1235692/pexels-photo-1235692.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'pants 2',
      rating: {
        rate: 3.5,
        count: 20
      }
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
        count: 10
      }
    }
  ])
  return (
    <>
      <ProductList products = {products} />
      
    </>
  )
}

export default App
