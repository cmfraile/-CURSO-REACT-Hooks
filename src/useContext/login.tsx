import { useContext } from "react"
import { useForma } from "../hooks";
import { userContext } from "./context/userContext";

export const login = () => {

    const { usuario , setUser } = useContext(userContext);
    const { userbox , formState , onInputChange } = useForma({userbox:''});

    return(
        <>
            <h3>Login</h3>
            <code>{JSON.stringify(usuario)}</code>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const valor = userbox.trim();
                    (valor.length >= 2 && userbox !== valor) && setUser(valor);
                }}>
            {Object.keys(formState).map((x:string) => {
                return(
                    <input
                        key={x}
                        type={(x === 'password') ? x : 'text'}
                        className="form-control iform"
                        placeholder={x}
                        name={x}
                        value={formState[x]}
                        onChange={onInputChange}
                    />
                )
            })}
            </form>
            <hr />
        </>
    )
}