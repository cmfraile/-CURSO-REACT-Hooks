import { useState } from "react"

const useCounter = (value:number = 10) => {
    const [ counter , setCounter ] = useState(value);
    return{counter}
}

export const useCustomHook = () => {

    const { counter } = useCounter();

    return(
        <>
        <h2>Custom hook</h2>

        <code>{counter}</code>

        <button className="btn btn-primary" >+1</button>
        <button className="btn btn-primary" >-1</button>
        <button className="btn btn-primary" >RESET</button>

        </>
    )
}