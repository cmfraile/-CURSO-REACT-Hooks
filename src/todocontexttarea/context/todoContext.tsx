import { createContext } from "react";
import { todocrudch } from "../hooks/todocrudhook";

export const todoContext = createContext<any>({...todocrudch});
export const todoProvider = ({children}:any) => {
    return(<todoContext.Provider value>{children}</todoContext.Provider>)
}