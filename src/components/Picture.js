
import React, {useState} from "react";

export const Picture = () => {
    
    const images=[
        "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg", 
        "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg"];
    
    const [url, setUrl] = useState(0);
    function handleChange(){
        url === 0 ? setUrl(1) : setUrl(0);
    }
    return (

        <div>
            <img src={images[url]} alt="" width="500px"></img>
            <div>
            <button onClick={handleChange}>Toggle Me!</button>
            <button onClick={()=> setUrl("")}>Turn Me Off</button>
            <button onClick={()=> setUrl(0)}>Turn the Kitty On!!</button>
            <button onClick={()=> setUrl(1)}>Turn the Doggy On!!</button>
            </div>
        </div>
    )
}


