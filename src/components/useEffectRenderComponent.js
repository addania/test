import React, {useEffect} from 'react';
import { useForm } from "./useFormHook.js"
// For explanation of the form itself and useForm hook which is custom
// refer to template called customHookForm

/*
// Example1: rendering message in console.log every time component renders

export const UseEffectRenderComponent =() => {

    const [valuez, handleChange] = useForm({email: "", password: "", surname: ""});

    useEffect (
      () => {
          console.log("Watch me! I rendered!")
      }

    );
    return (
    <div>

        <input name="email" value={valuez.email} onChange={handleChange}></input>       
        <input type="password" name="password" value={valuez.password} onChange={handleChange}></input>
        <input name="surname" value={valuez.surname} onChange={handleChange}></input>
        
        <h1>Form Output Email: {valuez.email}</h1>
        <h1>Form Output Pass: {valuez.password}</h1>
        <h1>Form Output Surname: {valuez.surname}</h1>            
    </div>
    )
}

*/

// Example2: rendering message in console.log only wheen password changes
export const UseEffectRenderComponent =() => {

    const [valuez, handleChange] = useForm({email: "", password: "", surname: ""});

    //first parameter in useEffect is my function which prits in console
    // () => {console.log("Watch me! I rendered!")}
    //second paramenter is a dependency array pass-in which allows to
    //condition when my function will be triggered
    // [valuez.password]
    //in this case, function console.log will fire when on 1st render + when I change password
    // to trigger in case of 2 events that change email AND password:
    //  [valuez.password, valuez.email]
    // to trigger for all changes of valuez we can type:
    // [valuez]
    // to trigger only on the first render, leave array empty
    // []
    useEffect (
      () => {
          console.log("Watch me! I rendered!")
      } , [valuez.password]

    );
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



// Example3: useEffect with clean-up function
// should be a separate project
