import ToggleSwitch from "../switch/ToggleSwitch.jsx";
import styles from "./controls.module.css";

function Controls({clearTextArray, deleteChar, prev, next, mode, setMode}) {
    return (

        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <ToggleSwitch value={mode} setValue={setMode} textOn={'Замена'} textOff={'Вставка'}/>
                <div className={styles.button} onClick={prev}>{'<='}</div>
                <div className={styles.button} onClick={next}>{'=>'}</div>
                <div className={styles.button} onClick={deleteChar}>Del</div>
                <div className={styles.button} onClick={clearTextArray}>Clear</div>
            </div>

        </div>
    );
}

export default Controls;