import { useCounter } from "./02-customHooks";
import { memo, useState } from "react";

const SmallHook = memo(({value}:{value:number}) => {
    console.log('Me redibuje');
    return(<small>{value}</small>)
})

export const memorize = () => {

    const { counter,sc } = useCounter();
    const [ show , setShow ] = useState(true);

    return(
        <>
        <h1>Memorize <SmallHook value={counter}/></h1>
        <button className="btn btn-primary" onClick={() => {sc('+')}}>+1</button>
        <button className="btn btn-primary" onClick={() => {setShow(!show)}} >Show/hide{ JSON.stringify(show)}</button>
        </>
    )
}