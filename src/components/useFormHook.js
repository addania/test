import { useState } from "react";

// initialValues will be passed to our useForm hook from file
//customHookFormComponent.js where these parameters are called valuez and handleChange
// at the start valuez will look like {email: "", password: ""}
export const useForm = (initialValues) => {

//each hook expects 2 parameters, value and a function, in this example 
// the function will be onChange function
    const [values, setValues] = useState(initialValues);

    return [
        values, 
        //second parameter we are passing is onChange function
        e => {
            setValues(
                {
                    //all other avlues which werent inputted or changed 
                    //will stay the same
                    ...values,
                    //e.target.name is the name of input field and 
                    //e.target.value is its values /whatever typed in
                    [e.target.name]: e.target.value
                }
            )

        }

    ];
};