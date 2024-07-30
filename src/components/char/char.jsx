import styles from "./char.module.css";

function Char({char}) {
    return (
        <div className={styles.charWrapper}>
            <div className={ `${styles.char} ${styles[char]}` }></div>
        </div>
    );
}

export default Char;