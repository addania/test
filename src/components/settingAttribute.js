
import React from "react";

export const SettingAttribute = () => {
    // function handleChange doesnt work, maybe e.target.setAttribute doesnt work in the function component???
    // or do I necessarily need to use the useState for it???
    
        function handleChange(e){
        e.target.setAttribute('src','https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg');
    }
    return (

        <div>
            <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg" width="500px" alt=""></img>
            <div>
            <button onClick={handleChange}>Display Cat</button>
            </div>
        </div>
    )
}


