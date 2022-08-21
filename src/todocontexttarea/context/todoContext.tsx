import { createContext } from "react";
import { todocrudch } from "../hooks/todocrudhook";

export const todoContext = createContext<any>({});
export const todoProvider = ({children}:any) => {
    return(<todoContext.Provider value={{...todocrudch()}}>{children}</todoContext.Provider>)
}