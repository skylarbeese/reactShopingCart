import React from 'react'


function Product({onAdd, product}) {
  return (
   <>
   <h1>{product.name}</h1>
   <h1>{product.price}</h1>
   <button onClick={() => onAdd(product)}>add to cart</button>
   </>
  );
}

export default Product;