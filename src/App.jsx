import { useState } from 'react'
import Alphabet from "./components/alphabet/alphabet.jsx";
import Preview from "./components/preview/preview.jsx";
import Controls from "./components/controls/controls.jsx";
import './App.css'


function App() {
    const [textArray, setTextArray] = useState([]);
    const [index, setIndex] = useState(0);

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

    return (
        <>
            <Preview textArray={textArray} textIndex={index}></Preview>
            <Alphabet setChar={setChar} ></Alphabet>
            <Controls clearTextArray={clearTextArray} deleteLastChar={deleteLastChar}></Controls>
        </>
    )
}

export default App