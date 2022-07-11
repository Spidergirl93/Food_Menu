//React imports
import { useContext } from 'react';

//Component imports
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

//CSS imports
import styles from './HeaderButton.module.css';

//Main component
const HeaderButton = props => {

    const context = useContext(CartContext);

    const itemAmount = context.items.reduce((initialAmount, item) => {
        return initialAmount + item.amount;
    }, 0);


    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.children}</span>
            <span className={styles.badge}>{itemAmount}</span> 
        </button>
    );
}

//Exports
export default HeaderButton;


