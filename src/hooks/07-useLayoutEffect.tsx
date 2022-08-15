import { useState } from "react"

//El use Layout Effect se aplica sobre el breaking bad quotes:
export const useLayoutEffectHook = (x:number = 0) => {
    const [height,setHeight] = useState(x);
    return{height,setHeight};
}