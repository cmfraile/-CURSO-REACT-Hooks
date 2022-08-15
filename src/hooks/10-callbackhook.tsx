import { useCallback, useState, memo } from "react";


const ShowIncrement = memo(({increment}:{increment:(value:number) => void}) => {
    console.log('redibujado del callbackhook');
    return(<button className="btn btn-primary" onClick={() => {increment(5)}}>+1</button>)
})


export const callbackhook = () => {

    //recuerda que el dispatcher puede tener un callback que recoje en su argumento el calor actual. De este modo, no generas una nueva función dentro del use Callback y no pierdes optimización:

    const [ counter , setCounter ] = useState(0);
    const increment = useCallback((value:number) => { setCounter((c) => c+value) },[]);
    
    
    return(
        <>
            <h1> use Callback hook <small>{counter}</small> </h1>
            <ShowIncrement increment={increment}/>
        </>
    )
}

/*
const ShowIncrement = memo(({increment}:{increment:() => void}) => {
    console.log('redibujado del callbackhook');
    return(<button className="btn btn-primary" onClick={increment}>+1</button>)
})

export const callbackhook = () => {

    //recuerda que el dispatcher puede tener un callback que recoje en su argumento el calor actual. De este modo, no generas una nueva función dentro del use Callback y no pierdes optimización:

    const [ counter , setCounter ] = useState(0);
    const increment = useCallback(() => { setCounter((c) => c+1) },[]);
    
    
    return(
        <>
            <h1> use Callback hook <small>{counter}</small> </h1>
            <ShowIncrement increment={increment}/>
        </>
    )
}
*/