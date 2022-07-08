//React imports
import React from 'react'

//Component imports
import CartContext from './cart-context';

//Main component
const CartProvider = (props) => {

    const addToCart = (item) => {

    };

    const reduceCart = (id) => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addToCart,
        removeItem: reduceCart
    };


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

//Exports
export default CartProvider;