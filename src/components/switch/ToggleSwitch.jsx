import styles from './ToggleSwitch.module.css'

const ToggleSwitch = ({value, setValue, textOn, textOff}) => {
    return (
        <div className={styles.wrapper} onClick={()=>setValue(!value)}>
            <div className={styles.textWrapper}>
                <div className={styles.text}>{textOff}</div>
                <div className={styles.text}>{textOn}</div>
            </div>
            <div className={styles.toggle}>
                <div className={value? styles.off : styles.on}></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;