import { useState } from "react";
import { useCounter } from "./02-customHooks";

export const callbackhook = () => {

    
    console.log('redibujado del callbackhook');
    return(
        <>
        <h1> callbackhook </h1>
        </>
    )
}