import React from 'react'


function Cart({onAdd, onRemove, cartItem}) {
    const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0)
    const total =  itemsPrice
  return (
   <>
    <div>
        <h1> cart Items </h1>
        <div>{cartItem.length === 0 && <div> cart is empty</div>}</div>
        {cartItem.map(item => {
            return (
                <>
                <div>
                    {item.name}
                </div>
                <div>
                    <button onClick={() => onAdd(item)}>+</button>
                    <button onClick={() => onRemove(item)}>-</button>
                </div>
                <div>
                    {item.qty} X $ {item.price.toFixed(2)}
                </div>
                </>
            )
        })}
    </div>
    {cartItem.length !== 0 && (
        <>
        <h1>{total.toFixed(2)}</h1>
        </>
    )}
   </>
  );
}

export default Cart;