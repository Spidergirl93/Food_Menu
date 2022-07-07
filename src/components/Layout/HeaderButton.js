//Component imports
import CartIcon from '../Cart/CartIcon'

//CSS imports
import styles from './HeaderButton.module.css';

//Main component
const HeaderButton = props => {
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.children}</span>
            <span className={styles.badge}>5</span> 
        </button>
    );
}

//Exports
export default HeaderButton;


