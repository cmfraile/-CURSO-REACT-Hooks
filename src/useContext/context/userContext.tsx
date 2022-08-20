import { createContext } from "react";

{/*
export const userContext = createContext();
export const userProvider = ({children}) => {return (<userContext.Provider value={{hola:'mundo'}}>{children}</userContext.Provider>)}
*/}

export const userProvider = ({children}:any) => {
    const userContext = createContext({});
    return(<userContext.Provider value={{hola:'mundo'}}>{children}</userContext.Provider>)
}