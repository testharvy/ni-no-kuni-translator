import styles from './ToggleSwitch.module.css'

const ToggleSwitch = ({value, setValue, textOn, textOff}) => {
    return (
        <div className={styles.wrapper} onClick={()=>setValue(!value)}>
             <span className={!value && styles.active}>{textOff}</span> / <span className={value && styles.active}>{textOn}</span>
        </div>
    );
};

export default ToggleSwitch;