//Component imports
import MealForm from './MealForm';


//CSS imports
import styles from './MealList.module.css';

//Main component
const MealList = (props) => {
    return(
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <div>
                <MealForm id={props.id} />
            </div>
        </li>
    );
}

//Exports
export default MealList;