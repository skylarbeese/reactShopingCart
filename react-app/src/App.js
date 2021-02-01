import React from 'react'
import Main from './comp/main'

import Cart from './comp/cart'
import Data from './Data'
import './App.css';

function App() {
  const {products} = Data
  const[cartItem, setCartItem] = React.useState([])
  const onAdd = (product) => {
     const exist = cartItem.find(x => x.id === product.id)
     if(exist) {
       setCartItem(cartItem.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty + 1
       } : x ))
     } else {
      setCartItem([...cartItem, {...product, qty: 1}])
     }
  }
  const onRemove = (product) => {
    const exist = cartItem.find(x => x.id === product.id)
    if(exist.qty === 1) {
     setCartItem(cartItem.filter(x => x.id !== product.id))
    } else {
      setCartItem(cartItem.map(x => x.id === product.id ? {
...exist, qty: exist.qty - 1 
       } : x ))
    }
  }
  return (
   <>
   <Main products={products} onAdd={onAdd}/>
  
   <Cart cartItem={cartItem} onRemove={onRemove} onAdd={onAdd}/>
   </>
  );
}

export default App;
