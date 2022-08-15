import { useRef } from "react"

export const focusScreen = () => {

    const inputRef = useRef<HTMLInputElement>((<input/>).type);

    return(
        <>
            <h1>Focus screen</h1>

            <input
                    ref={inputRef}
                    type="text"
                    placeholder="ingrese su nombre"
                    className="form-control"        
            />

            <button
            onClick={() => {inputRef.current.select()}}
            >
                focus
            </button>
        </>
    )
}