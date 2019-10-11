
import React, {useRef } from "react";

// Example1: targetting input field and console.log the caurrent value of the input field
/*
export const UseRefComponent = () => {

    const inputRef = useRef();

    return (
        <div>
        <input ref={inputRef} name="email" placeholder="insert your mail" />
        <div>
        <button onClick={ ()=> 
        console.log(inputRef.current)
        }>
        I targetS the input field</button>
        </div>
        </div>
    )
}
*/

// Example2: targetting input field and putting focus on that field (thich means it will be highlighted in the browser)

export const UseRefComponent = () => {

    const inputRef = useRef();

    return (
        <div>
        <input ref={inputRef} name="email" placeholder="insert your mail" />
        <div>
        <button onClick={ ()=> 
        inputRef.current.focus()
        }>
        I targetS the input field</button>
        </div>
        </div>
    )
}


