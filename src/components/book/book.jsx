import styles from "./book.module.css";

const Book = () => {
    return (
        <div className={styles.book_wrapper}>
            <img className={styles.book} alt={'книга'} src='./alphabet.jpg' width='1308px' height='980px'/>
        </div>
    );
};

export default Book;