import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const cartContext = useContext(CartContext);

    const cost = `${props.price.toFixed(0)} Ft.-`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    }

    return (
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.descr}</div>
                <div className={style.price}>{cost}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;