import {Fragment} from 'react';
import mealsIMG from '../../assets/meals.jpg';
import style from './Header.module.css';
import HeaderCartBUtton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBUtton onClick={props.onShowCart}/>
            </header>
            <div className={style['main-image']}>
                <img src={mealsIMG} alt={"A table with a lot of food!"}/>
            </div>
        </Fragment>
    );
}

export default Header;