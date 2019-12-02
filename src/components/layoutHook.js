
import React, {useLayoutEffect, useState } from "react";

// Example: checking the width of input field (always only on the first render, that is why there is , [] theres)
// and storing the information in the a variable and displaying in a pre tag which will allow us to display JSON nicely

export const useMeasure = (ref) => {
    
    const [size, setSize] = useState({});

    useLayoutEffect( 
        () => 
        {
        setSize(ref.current.getBoundingClientRect());
// eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

    return size;
};

