//CSS imports
import styles from './Input.module.css';

//Main component
const Input = (props) => {

    return(
        <div className={styles.input}>
            <label>{props.label}</label>
            <input {...props.input} />
        </div>
    );
}

//Exports
export default Input;