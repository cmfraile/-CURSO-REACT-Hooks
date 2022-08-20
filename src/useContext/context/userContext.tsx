import { createContext, useState } from "react";
import { random } from "underscore";

export const userContext = createContext<any>({});
export const userProvider = ({children}:any) => {
    const [ usuario , setUsuario ] = useState<{id:string,nombre:string,avatar:string}|{}>();
    const setUser = (usuario:string) => {setUsuario({id:random(0,100000).toString(),usuario,avatar:'imgurl'})};
    
    return (<userContext.Provider value={{usuario,setUser}}>{children}</userContext.Provider>)
}

{/*La razón de porque esta forma no funciona es porque para consumir la data del context debes de exportar el context. El provider solo establece el acceso al context a toda la familia descendente del provider:
export const userProvider = ({children}:any) => {
    const userContext = createContext({});
    return(<userContext.Provider value={{hola:'mundo'}}>{children}</userContext.Provider>)
}
*/}