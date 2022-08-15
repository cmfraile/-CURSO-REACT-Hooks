import { useCounter } from "./02-customHooks";
import { memo, useMemo, useState } from "react";

const movida = (inumber:number=100) => {
    for(let i = 0 ; i<= inumber ; i++){console.log('ahi vamos')};
    return `[${inumber}] iteraciones realizadas`;
}

export const memohook = () => {

    const { counter,sc } = useCounter(100);
    const [ show , setShow ] = useState(true);
    const memovalue = useMemo(() => {movida(counter)},[counter]);

    return(
        <>
        <h1>Memohook <small>{counter}</small></h1>
        <h4>memovalue</h4>
        <button className="btn btn-primary" onClick={() => {sc('+')}}>+1</button>
        <button className="btn btn-primary" onClick={() => {setShow(!show)}}>Show/hide : { JSON.stringify(show)}</button>
        </>
    )
}