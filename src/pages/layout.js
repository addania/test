import React from 'react';
import { Layout } from "../components/layout.js"

export default () => (
    
    <div>
        <h1>UseLayoutEffect</h1>
        <h2>Same as useEffect, only difference is that this one allows to get information from DOM after components rendered</h2>
        <h2>Example: measuring a component width</h2>
        <Layout />
        <button>Back</button>       
    </div>
)

