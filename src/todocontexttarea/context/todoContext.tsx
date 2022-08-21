import { createContext , useReducer , useEffect } from "react";
import { random } from "underscore";
import { todocrudch } from "../hooks/todocrudhook";

export const todoContext = createContext<any>({});
export const todoProvider = ({children}:any) => {
    return(<todoContext.Provider value={{...todocrudch}}>{children}</todoContext.Provider>)
}