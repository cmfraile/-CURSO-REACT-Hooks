import { useState } from "react"

const useCounter = (value:number = 10) => {
    const [ counter , setCounter ] = useState<number>(value);
    const sc = (arg:string):void => {
        switch(arg){
            case '+': setCounter(counter+1);break;
            case '-': setCounter(counter-1);break;
            case 'R': setCounter(value);break;
        }
    };
    return{counter,sc}
}

export const useCustomHook = () => {

    const { counter , sc } = useCounter();

    return(
        <>
        <h2>Custom hook</h2>

        <code>{counter}</code>

        <button className="btn btn-primary" onClick={() => {sc('+')}} >+1</button>
        <button className="btn btn-primary" onClick={() => {sc('-')}} >-1</button>
        <button className="btn btn-primary" onClick={() => {sc('R')}} >RESET</button>

        </>
    )
}