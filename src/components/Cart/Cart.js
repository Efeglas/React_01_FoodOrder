import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import style from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `${cartContext.totalAmount} Ft.-`;
    const hasItems = cartContext.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    }

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    }

    const cartItems = cartContext.items.map((item) => {
        return <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>;
    });
    
    return (
        <Modal onClose={props.onClose}>
            <ul className={style["cart-items"]}>
                {cartItems}
            </ul>
            <div className={style.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;