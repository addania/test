
import React, {useState, useEffect} from "react";
import { useFetch } from "../components/useFetch.js"

// Example 1: setting initial value of count to 0:



export const APIContainer2 = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    // saving the count in the local storage IN BROWSER, to use in future sessions. 
    //In order to do so, we can use useEffect (cause it works like elementDidUpdate)
    // local storage can only store strings, therefore we need to make text out of it using JSON.stringify to convert our JSON
//  Open up the Web Developer tools in your browser of choice, find the tab Application -> Storage -> Local storage -> select the current domain 
// which would be localhost:8000 and watch the value for the count
// then in future, if I want to use this value instead of resettig it always to 0, I can use the last use value like this:
// instead of: const [count, setCount] = useState(0);
// we will use: const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));

    useEffect ( ()=> {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count]);



    return (
        <div>
        <h1>{data}</h1>
        <h1>Loading is: {loading.toString()}</h1>
        <h1>Count is: {count}</h1>
        <button onClick={()=> setCount(i=> i+1)}>increase count</button>
        </div>
    )
}


/*
//Example 2: saving the count in local memory, so that next time, we continue with the last number stored, not always from 0
// however, if we use: const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
// JSON.parse will be called every time we render
// if we want to use it only initially, we can use initialtor function of the useState:
// const [count, setCount] = useState( () => JSON.parse(localStorage.getItem("count")));

export const APIContainer2 = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    // saving the count in the local storage IN BROWSER, to use in future sessions. 
    //In order to do so, we can use useEffect (cause it works like elementDidUpdate)
    // local storage can only store strings, therefore we need to make text out of it using JSON.stringify to convert our JSON
//  Open up the Web Developer tools in your browser of choice, find the tab Application -> Storage -> Local storage -> select the current domain 
// which would be localhost:8000 and watch the value for the count
// then in future, if I want to use this value instead of resettig it always to 0, I can use the last use value like this:
// instead of: const [count, setCount] = useState(0);
// we will use: const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));

    useEffect ( ()=> {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count]);



    return (
        <div>
        <h1>{data}</h1>
        <h1>Loading is: {loading.toString()}</h1>
        <h1>Count is: {count}</h1>
        <button onClick={()=> setCount(i=> i+1)}>increase count</button>
        </div>
    )
}
*/