import React, { useState} from 'react';
import { HiddenItem } from "./hiddenItem.js";

// Example1: toggling component on and off using useEffect
// {showHello && <h1>My item to hide</h1>} shows conditionally an item

export const ToggleComponent = () => {
  const [showHello, setShowHello] = useState(true);


    return (
    <div>
    <button onClick={()=>
    setShowHello(!showHello)
    }>
    On&Off</button>
    <h1>My visibility is <span style={{color: "red"}}>{showHello.toString()}</span></h1>

    {showHello && <HiddenItem />}
    </div>
    )
}

