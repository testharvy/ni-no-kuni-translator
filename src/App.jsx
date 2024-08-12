import { useState } from 'react'
import Alphabet from "./components/alphabet/alphabet.jsx";
import Preview from "./components/preview/preview.jsx";
import Controls from "./components/controls/controls.jsx";
import './App.css'
import Book from "./components/book/book.jsx";
import ToggleSwitch from "./components/switch/ToggleSwitch.jsx";


function App() {
    const [textArray, setTextArray] = useState([]);
    const [index, setIndex] = useState(0);
    const [showBook, setShowBook] = useState(false);
    const [insertMode, setInsertMode] = useState(true);

    const setChar = (char) =>{
        const newTextArray = [...textArray];
        if(insertMode){
            newTextArray[index] = char;
        }else{
            newTextArray.splice(index, 0, char);
        }
        setTextArray(newTextArray);
        const newIndex = index+1;
        setIndex(newIndex);
    }

    const clearTextArray = () =>{
        setTextArray([]);
        setIndex(0);
    }

    const deleteChar = () => {
        if(insertMode && index!== textArray.length){
            if(textArray.length>0){
                const newTextArray = [...textArray]
                newTextArray.splice(index,1)
                setTextArray(newTextArray);
            }
        }else{
            if(index !== 0){
                const newTextArray = [...textArray]
                newTextArray.splice(index-1,1)
                setTextArray(newTextArray);
                const newIndex = index-1;
                setIndex(newIndex);
            }

        }
    }

    const prev = () => {
        if(index>0){
            const newIndex = index-1;
            setIndex(newIndex);
        }
    }
    const next = () => {
        if(index<textArray.length){
            const newIndex = index+1;
            setIndex(newIndex);
        }
    }


    return (
        <div className='content'>
            <div className='book_switch'>
                <ToggleSwitch value={showBook} setValue={setShowBook} textOn={'Книга'} textOff={'Ввод'}/>
            </div>
            { showBook ?
                <Book/>
            :
                <>
                    <Preview textArray={textArray} textIndex={index} insertMode={insertMode}></Preview>
                    {index}
                    <Alphabet setChar={setChar} ></Alphabet>
                    <Controls clearTextArray={clearTextArray} deleteChar={deleteChar} prev={prev} next={next} mode={insertMode} setMode={setInsertMode}></Controls>
                </>
            }
        </div>
    )
}

export default App
