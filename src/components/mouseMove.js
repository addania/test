import React, {useEffect} from 'react';
import { useForm } from "./useFormHook.js"

// Example2: rendering message in console.log only wheen password changes
export const MouseMove =() => {

    const [valuez, handleChange] = useForm({email: "", password: "", surname: ""});

    useEffect (
      () => {
          const onMouseMove = e => {
              console.log(e);
          };
          window.addEventListener("mousemove", onMouseMove);
          return () => {
          window.removeEventListener("mousemove", onMouseMove);
          };
      }, []);
    return (
    <div>

        <input name="email" placeholder="your mail" value={valuez.email} onChange={handleChange}></input>       
        <input type="password" placeholder="your pass" name="password" value={valuez.password} onChange={handleChange}></input>
        <input name="surname" placeholder="your surname" value={valuez.surname} onChange={handleChange}></input>
        
        <h1>Form Output Email: {valuez.email}</h1>
        <h1>Form Output Pass: {valuez.password}</h1>
        <h1>Form Output Surname: {valuez.surname}</h1>            
    </div>
    )
}
