import React from 'react';
import './index.css';

export default () => (
    <div>
        <h1>Templates</h1>
        <h2>useState</h2>
        <ul>
            <li><a href="/clickCounter">Click Counter</a></li>
            <li><a href="/simpleForm">Simple Form</a></li>
            <li><a href="/customHookForm">Custom Hook Form</a></li>
        </ul>
        <h2>useEffect</h2>
        <ul>
            <li><a href="/useEffectRender">Ruling over the world of renders of useEffect</a></li>
            <li><a href="/simpleForm">Simple Form</a></li>
            <li><a href="/customHookForm">Custom Hook Form</a></li>
            <li><a href="/toggleOnOff">Toggle visibility of a component on and off with a button</a></li>
            <li><a href="/APIfetch">Fetching from API</a></li>
            <li><a href="/APIfetchVariableURL">Fetching from API with variable URL</a></li>
        </ul>
        <h2>useRef</h2>
        <ul>    
            <li><a href="/useRef">Storing reference to a component</a></li>
            <li><a href="/useRefInteger">Storing integer</a></li>

        </ul>      
        <h2>useLayoutEffect</h2>
        <ul>    
            <li><a href="/layout">Layout</a></li>
            <li><a href="/layoutCustomHook">ERROR: Layout Custom Hook</a></li> 
        </ul>      
        <h2>CodeCademyk</h2>
        <ul>    
            <li><a href="/pi">Genrating Peee :)</a></li>
            <li><a href="/changePic">Change picture on Click</a></li>
            <li><a href="/settingAttribute">ERROR: e.target.setAttribute not working in function comopnent??? Setting attribute with a function</a></li>
        </ul>   
    </div>
)

