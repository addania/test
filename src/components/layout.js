
import React, {useRef, useLayoutEffect, useState } from "react";

//Example1: checking the width of input field (always only on the first render, that is why there is , [] theres)
// and console logging the information
/*
export const Layout = () => {
    
    const inputRef = useRef();   
    const divRef = useRef();

    useLayoutEffect( 
        () => 
        {
        console.log("INPUT: ", inputRef.current.getBoundingClientRect());
    }, []);

    useLayoutEffect( 
        () => 
        {
        console.log("DIV: ", divRef.current.getBoundingClientRect());
    }, []);
    
    return (
        <div>
            <div ref={divRef}>
            <h1>I am big Header</h1>
            </div>
        <input ref={inputRef} name="email" placeholder="your email" /> 
        </div>
    )
}

*/

// Example2: checking the width of input field (always only on the first render, that is why there is , [] theres)
// and storing the information in the a variable and displaying t on a h3 tag
/*
export const Layout = () => {
    
    const inputRef = useRef();   
    const divRef = useRef();
    const [size, setSize] = useState({});

    useLayoutEffect( 
        () => 
        {
        setSize(inputRef.current.getBoundingClientRect());
    }, []);

    useLayoutEffect( 

        () => 
        {
        console.log("DIV: ", divRef.current.getBoundingClientRect());
    }, []);
    
    return (
        <div>
            <div ref={divRef}>
            <h1>I am big Header</h1>
            </div>

        <input ref={inputRef} name="email" placeholder="your email" /> 
     <h3>{JSON.stringify(size)}</h3>
        </div>
    )
}

*/

// Example: checking the width of input field (always only on the first render, that is why there is , [] theres)
// and storing the information in the a variable and displaying in a pre tag which will allow us to display JSON nicely

export const Layout = () => {
    
    const inputRef = useRef();   
    const divRef = useRef();
    const [size, setSize] = useState({});

    useLayoutEffect( 
        () => 
        {
        setSize(inputRef.current.getBoundingClientRect());
    }, []);

    useLayoutEffect( 

        () => 
        {
        console.log("DIV: ", divRef.current.getBoundingClientRect());
    }, []);
    
    return (
        <div>
            <div ref={divRef}>
            <h1>I am big Header</h1>
            </div>

        <input ref={inputRef} name="email" placeholder="your email" /> 
     <pre>{JSON.stringify(size, null, 2)}</pre>
        </div>
    )
}

