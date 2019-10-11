import { useEffect, useState } from 'react';
/*
// Example1: how to fetch from and API and display result in console log.

export const useFetch = url => {
useEffect(() => {
      fetch(url)
      .then(x=> x.text())
      .then(y=>
        {
            console.log(y);
        }
        );
//our url dependeency, when url changes, we call useEffect
    }, [url])
    return "Hi"
};
*/

// Example2: how to fetch from and API and display result on page

export const useFetch = url => {
    const [state, setState] = useState ({data: null, loading: true});

    useEffect(() => {
        setState({data: null, loading: true})
          fetch(url)
          .then(x=> x.text())
          .then(y=>
            {
                setState({data: y, loading: false})
            }
            );
    //our url dependeency, when url changes, we call useEffect, we NEED to include this DEPENDENCY !!!!
    // we can also include setState as a dependancy because we use this function in the useEffect!!!!
    // carefull with dependencies, so that thez dont call each other, otherwise we create infinite loop
        }, [url, setState])
        return state;
    };
