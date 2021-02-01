import React from 'react'

import Products from './product'
function Main({products, onAdd}) {
   
  return (
   <>
   {products.map(product => {
       return <Products key={product.id} product={product} onAdd={onAdd}/>
   })}
   </>
  );
}

export default Main;