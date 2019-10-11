import React from 'react';
import { APIContainer } from "../components/APIContainer.js"
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
        <h1>API fetch</h1>
        <APIContainer />
        <button>Back</button>       
    </div>
)

