import Char from "../char/char.jsx";
import styles from "./preview.module.css";

function Preview({textArray, textIndex, setTextIndex, insertMode}) {
    const reverseText = textArray.slice().reverse()

    return (
        <div className={styles.wrapper}>
            <span className={insertMode && styles.insertMode}>
                {textArray.map((char, charIndex)=> <span key={charIndex} onClick={()=>setTextIndex(charIndex)}>
                    {textIndex===charIndex  && <div className={styles.cursor}></div>}
                    <Char char={char} />
                </span>)}
            </span>
            {textIndex===textArray.length && <div className={styles.cursor}></div>}
            <span className={styles.lastIndexClick} onClick={()=>setTextIndex(textArray.length)}></span>
            <div>
                {reverseText}
            </div>
        </div>
    );
}

export default Preview;