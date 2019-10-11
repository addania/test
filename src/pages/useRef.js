import React from 'react';
import { UseRefComponent } from "../components/useRefComponent.js"

export default () => (

    <div>
        <h1>Storing reference to a component</h1>
        <h2>Every time I click a button, this button will target an input field or a div</h2>
        <UseRefComponent />
        <button>Back</button>       
    </div>
)

