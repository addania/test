import React from 'react';
import { useForm } from "./useFormHook.js"

// Example1: using our own custom hook  useeForm to change automatically both
// input fields together: email and password. One input field has
// attribute name called "email", another input field has 
// attribute name called "password"
// each hook expect initiall value and a function
// initial valuez are seet to empty string for both email and password
// onChange will then trigger handleChange function which is then passed 
// to our custom hook called useForm

export const CustomHookFormComponent =() => {
    //valuez is an object, initially set to empty strings:
    // {email: "", password: "", surname: ""}
    const [valuez, handleChange] = useForm({email: "", password: "", surname: ""});

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
