
import React, {useRef } from "react";

// Example1: we can store an integer as a reference (doesnt need to be a DOM element). 
// In this example it will be an integer. Storing number of times a component has rendereed
// we always need to use .current if we want to use the value of the useRef!!!
// ++ increases the original value of the reenders from 0 by 1 every time

export const HelloComponent = () => {

    const renders = useRef(0);

    console.log("Hello renders: ", renders.current++, " times.");
    return (
        <div>Hello</div>
    )
}


