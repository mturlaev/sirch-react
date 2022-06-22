import React from "react";
import Card from "./Card.jsx";
import { useState } from "react";
import newArray from "./Array.jsx";
import css from "./Card.module.css";

export default function Middle (){
    const [array, setArray] = useState(newArray);
    const [text, setText] = useState("")
    

    const handleText = (e) => {
        setText(e.target.value);
        if(e.target.value === "") {
            return setArray(newArray)
        }else {
            setArray(array.filter((item) => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase())
                    }))
        } 
    }
console.log(text)
    return(
        <>
        <div className={css.input_main}>
            <form>
                <input type="text" placeholder="Введите текст.." className={css.input} value={text} onChange={handleText}/>
            </form>
        </div>
        <div className={css.map_item}>
            {array.map((item, index) => {
                return <Card key={index} item={item} />
            })}
        </div>
        </>
    )
}