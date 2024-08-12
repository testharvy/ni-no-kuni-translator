import Char from "../char/char.jsx";
import styles from "./preview.module.css";

function Preview({textArray, textIndex, insertMode}) {
    const reverseText = textArray.slice().reverse()

    return (
        <div className={styles.wrapper}>
            <span className={insertMode && styles.insertMode}>
                {textArray.map((char, charIndex)=> <>
                    {textIndex===charIndex  && <div className={styles.cursor}></div>}
                    <Char key={charIndex} char={char}/>
                </>)}
            </span>
            {textIndex===textArray.length && <div className={styles.cursor}></div>}
            <div>
                {reverseText}
            </div>
        </div>
    );
}

export default Preview;