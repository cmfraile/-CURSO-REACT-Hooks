import { useState } from "react"

export const useStateHook = () => {

    const [contador,setCounter] = useState<any>({c1:10,c2:20,c3:30});
    const {c1,c2,c3} = contador;

    return(
        <>
        <h2>useState</h2>
        <code>{JSON.stringify({c1,c2,c3})}</code>
        <button className="btn btn-primary" onClick={() => { setCounter({...contador,c1:c1+1}) }}>+1</button>
        </>
    )
}