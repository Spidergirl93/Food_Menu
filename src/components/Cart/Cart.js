//Component imports
import Modal from '../UI/Modal';

//CSS imports
import styles from './Cart.module.css';

//Main component 
const Cart = (props) => {

    const cartItems = <ul className={styles[`cart-items`]}>{
        [{
            id: 'm1',
            name: 'Sushi',
            amount: '1',
            price: '50'
        }].map((item) => (
            <li key={item.id}>{item.name}</li>
        ))
        }</ul>;

    return(
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>100$</span>
            </div>
            <div className={styles.actions}>
                <button className={styles[`button--alt`]} onClick={props.onCancel}>Cancel</button>
                <button className={styles[`button`]}>Order</button>
            </div>
        </Modal>
    );
};

//Exports
export default Cart;