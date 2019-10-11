import React from 'react';
import { APIContainer2 } from "../components/APIContainer2.js"
/*
//Example 1:

export default () => (
    <div>
        <h1>API fetch</h1>
        <h1>{useFetch("http://numbersapi.com/43/trivia")}</h1>
        <button>Back</button>       
    </div>
)

*/

//Example2:

export default () => (

    <div>
        <h1>API fetch with variable URL</h1>
        <APIContainer2 />
        <button>Back</button>       
    </div>
)

