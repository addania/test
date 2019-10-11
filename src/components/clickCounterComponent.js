import React, {useState} from 'react';

/*
//Example 1: using count directly in setCount

export function ClickCounterComponent () {
    const [count, setCount] = useState(0);
    return (
    <div>
        <button onClick={()=> setCount(count+1)}>Click me!!!</button>  
        <h1>Total amount of your clicks is: {count}</h1>     
    </div>
    )
}*/

/*
// Example2: using function in setCount which takes in one parameter, 
// we call it currentCount which is equals to our count
export function ClickCounterComponent () {
    const [count, setCount] = useState(0);
    return (
    <div>
        <button onClick={()=> setCount(currentCount => currentCount+1)}>Click me!</button>  
        <h1>Total amount of your clicks is: {count}</h1>     
    </div>
    )
}
*/
/*
// Example3: using two variables: count and count2 as an object
export function ClickCounterComponent () {
    const [{count, count2}, setCount] = useState({count: 0, count2: 0});
    return (
    <div>
        <button 
        onClick={()=> 
            setCount(currentObject => ({
            count: currentObject.count+1,
            count2: currentObject.count2
            }))
            }>Count: Click me!</button>  
        
        
        <button 
        onClick={()=> 
            setCount(currentObject => ({
            ...currentObject,
            count2: currentObject.count2+1,
        }))
        }>Count2: Click me TOO!</button>

        <h1>Total amount of your count clicks is: {count}</h1>
        <h1>Total amount of your count2 clicks is: {count2}</h1>       
    </div>
    )
}
*/

/*
// Example4: using two variables: count and count2 separately
export function ClickCounterComponent () {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
    <div>

        <button 
        onClick={()=> 
            setCount(count+1)
            }>Count: Click me!</button>  
        
        <button 
        onClick={()=> 
            setCount2(c => c+1)
        }>Count2: Click me 2!</button>

        <h1>Total amount of your count clicks is: {count}</h1>
        <h1>Total amount of your count2 clicks is: {count2}</h1>       
    </div>
    )
}
*/
// Example5: to increase both count and count2 at the same time

export function ClickCounterComponent () {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
    <div>

        <button 
        onClick={()=> 
            {
            setCount(count+1);
            setCount2(count+1)
            }
            }>Click me to increase both count and count2!</button>  
        

        <h1>Total amount of your count clicks is: {count}</h1>
        <h1>Total amount of your count2 clicks is: {count2}</h1>       
    </div>
    )
}
