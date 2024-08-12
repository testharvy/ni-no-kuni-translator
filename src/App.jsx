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

    const setChar = (char) =>{
        const newTextArray = [...textArray];
        newTextArray[index] = char;
        setTextArray(newTextArray);
        const newIndex = index+1;
        setIndex(newIndex);
    }

    const clearTextArray = () =>{
        setTextArray([]);
        setIndex(0);
    }

    const deleteLastChar = () => {
        if(index>0){
            const newTextArray = [...textArray].slice(0,-1)
            setTextArray(newTextArray);
            console.log(newTextArray)
            const newIndex = index-1;
            setIndex(newIndex);
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
            <ToggleSwitch value={showBook} setValue={setShowBook} textOn={'книга'} textOff={'ввод'}/>
            { showBook ?
                <Book/>
            :
                <>
                    <Preview textArray={textArray} textIndex={index}></Preview>
                    <Alphabet setChar={setChar} ></Alphabet>
                    <Controls clearTextArray={clearTextArray} deleteLastChar={deleteLastChar} prev={prev} next={next}></Controls>
                </>
            }
        </div>
    )
}

export default App
