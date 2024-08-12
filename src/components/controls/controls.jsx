import styles from "./controls.module.css";

function Controls({clearTextArray, deleteLastChar, prev, next}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.button} onClick={prev}>Prev</div>
            <div className={styles.button} onClick={next}>Next</div>
            <div className={styles.button} onClick={deleteLastChar}>Del</div>
            <div className={styles.button} onClick={clearTextArray}>Clear</div>
        </div>
    );
}

export default Controls;