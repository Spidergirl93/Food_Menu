//React imports
import React, { useReducer } from 'react'

//Component imports
import CartContext from './cart-context';

//Other Methods and components
const latestCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        /* latestCart.items = state.items.concat(action.value);
        latestCart.totalAmount = state.totalAmount + action.value.price * action.value.amount; */
        const updatedItems = state.items.concat(action.value);
        const updatedTotalAmount = state.totalAmount + action.value.price * action.value.amount;
        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
        };        
    } else if(action.type === 'REMOVE') {

    }

    return latestCart;
};

//Main component
const CartProvider = (props) => {

    const [cart, dispatchCart] = useReducer(cartReducer, latestCart);

    const addToCart = (item) => {
        dispatchCart({
            type: 'ADD',
            value: item
        });
    };

    const reduceCart = (id) => {
        dispatchCart({
            type: 'REMOVE',
            value: id
        });
    };

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
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