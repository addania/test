import React from 'react';
import { ToggleComponent } from "../components/toggleComponent.js"

export default () => (
    <div>
        <h1>How to toggle component on and off with button</h1>
        <h2>plus logging message when component dismounts using useEffect</h2>

        <ToggleComponent />
        <button>Back</button>       
    </div>
)

