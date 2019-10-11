import React, { useEffect } from "react";

//Example: Rendering messages when object renders and dismounts
// dismounting is when we add return to our useEffect hook
// return () => {console.log("I unmounted, I am incognito now");};

export const HiddenItem = () => {   
    useEffect(() => {
      console.log ("I rendered");
      
      return () => {
        console.log("I unmounted, I am incognito now");
      };
    }, []);

    return <h1>HiddenItem</h1>
};