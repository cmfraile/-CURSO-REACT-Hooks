import { createContext , useReducer , useEffect } from "react";
import { random } from "underscore";
import { todocrudch } from "../hooks/todocrudhook";

export const todoContext = createContext<any>({...todocrudch});
export const todoProvider = ({children}:any) => {
    return(<todoContext.Provider value>{children}</todoContext.Provider>)
}