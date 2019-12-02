
import React, {useRef, useLayoutEffect, useState } from "react";
import useMeasure from "./layoutHook";

// Example: checking the width of input field (always only on the first render, that is why there is , [] theres)
// and storing the information in the a variable and displaying in a pre tag which will allow us to display JSON nicely

export const LayoutCustomHook = () => {
    
    const inputRef = useRef();   
    const divRef = useRef();
    const [size, setSize] = useState({});

    const rectangle = useMeasure(divRef);

    return (
        <div>
            <div ref={divRef}>
            <h1>I am big Header</h1>
            </div>

        <input ref={inputRef} name="email" placeholder="your email" /> 
     <pre>{JSON.stringify(rectangle, null, 2)}</pre>
        </div>
    )
}

