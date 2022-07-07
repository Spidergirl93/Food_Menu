//Component imports
import Input from '../UI/Input';

//CSS imports
import styles from './MealForm.module.css';

//Main component
const MealForm = (props) => {
    return(
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: 'amount_' + PaymentResponse.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '0'
            }} />
            <button>Add</button>
        </form>
    );
}

//Exports
export default MealForm;