import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (lastState, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = lastState.totalAmount + action.item.price * action.item.amount;
        const existingCartIndex = lastState.items.findIndex((item) => {
            return item.id === action.item.id;
        });
        const existingCartItem = lastState.items[existingCartIndex];
        
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem, amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...lastState.items];
            updatedItems[existingCartIndex] = updatedItem;
        } else {
            updatedItems = lastState.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === "REMOVE") {
        const existingCartIndex = lastState.items.findIndex((item) => {
            return item.id === action.id;
        });
        const existingCartItem = lastState.items[existingCartIndex];
        const updatedTotalAmount = lastState.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = lastState.items.filter((item) => {
                return item.id !== action.id;
            });
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...lastState.items];
            updatedItems[existingCartIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } 

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;