import Char from "../char/char.jsx";
import styles from "./preview.module.css";

function Preview({textArray, textIndex}) {
    const reverseText = textArray.slice().reverse()

    return (
        <div className={styles.wrapper}>
            <div className={styles.charWrapper}>
                {textArray.map((char, charIndex)=> <Char key={charIndex} char={char}/>)}
            </div>
            <div>
                {reverseText}
            </div>
        </div>
    );
}

export default Preview;