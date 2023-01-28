import CartIcon from "../Cart/CartIcon";
import style from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from "../../store/cart-context";

const HeaderCartBUtton = (props) => {

    const [btnBumped, setBtnBumped] = useState(false);

    const cartContext = useContext(CartContext);

    const {items} = cartContext;

    const cartItemCount = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const buttonClass = `${style.button} ${btnBumped ? style.bump : ''}`;


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnBumped(true);

        const timer = setTimeout(() => {
            setBtnBumped(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={buttonClass} onClick={props.onClick}>
            <span className={style.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={style.badge}>{cartItemCount}</span>
        </button>
    );
}

export default HeaderCartBUtton;