
import React from "react";
import { useFetch } from "../components/useFetch.js"

export const APIContainer = () => {
    const {data, loading} = useFetch("http://numbersapi.com/43/trivia");

    return (
        <div>
        <h1>{data}</h1>
        <h1>Loading is: {loading.toString()}</h1>
        </div>
    )
}
