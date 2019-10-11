import React, {useState} from 'react';

/*
XXXX
*/
// Example1: setting up each form manually and individually

export const SimpleFormComponent =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div>

<input name="email" value={email} onChange={event => setEmail(event.target.value)} ></input>       
<input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <h1>Form Output Email: {email}</h1>
        <h1>Form Output Pass: {password}</h1>        
    </div>
    )
}
