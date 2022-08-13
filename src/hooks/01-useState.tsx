import { useState } from "react"

export const useStateHook = () => {

    const [{c1,c2,c3},setCounter] = useState<any>({c1:10,c2:20,c3:30});

    return(
        <>
        <hr />
        <code>{JSON.stringify({c1,c2,c3})}</code>
        <button type="button" className="btn btn-primary" onClick={() => { setCounter({c1:c1+1,c2,c3}) }}>+1</button>
        </>
    )
}