import styles from "./alphabet.module.css";
import Char from "../char/char.jsx";

function Alphabet({setChar}) {
    const charList = 'абвгдежзийклмнопрстуфхцчшщъыьэюя1234567890-'

    return (
        <div className={styles.wrapper}>
            <div className={styles.charField}>
                {charList.split('').map((char)=>
                    <div key={char} onClick={()=>setChar(char)} className={styles.charWrapper}>
                        <div >{char}</div>
                        <Char char={char} showLetter={true}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Alphabet;