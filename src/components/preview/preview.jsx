import Char from "../char/char.jsx";
import styles from "./preview.module.css";

function Preview({textArray, textIndex}) {
    const reverseText = textArray.slice().reverse()

    return (
        <div className={styles.wrapper}>
            <div className={styles.charWrapper}>
                {textArray.map((char, charIndex)=> <>
                    {textIndex===charIndex  && <div className={styles.cursor}></div>}
                    <Char key={charIndex} char={char}/>
                </>)}

                {textIndex===textArray.length && <div className={styles.cursor}></div>}
            </div>
            <div>
                {reverseText}
            </div>
        </div>
    );
}

export default Preview;