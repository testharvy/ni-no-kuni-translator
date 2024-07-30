import styles from "./controls.module.css";

function Controls({clearTextArray, deleteLastChar}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.button} onClick={deleteLastChar}> Del </div>
            <div className={styles.button} onClick={clearTextArray}>Clear</div>
        </div>
    );
}

export default Controls;