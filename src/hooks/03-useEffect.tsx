import { useState , useEffect } from "react"

const Message = () => {

    useEffect(() => {
        console.log("montado");
        return () => {
            console.log("DESmontado");
        }
    })

    return(
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}

export const useEffectHook = () => {

    const [formState,setFormState] = useState({
        username:'',
        email:''
    });
    const { username , email } = formState;
    
    const onInputChange = ({target}:any) => {
        const { name , value } = target;
        setFormState({
            ...formState,
            [ name ]:value
        })
    }

    /*
    useEffect(() => {console.log('username!')},[username]);
    useEffect(() => {console.log('email!')},[email]);
    */


    

    return (
        <>
            <h2>UseEffectHook</h2>
            <input
                    type="text"
                    className="form-control iform"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
            />
            <input
                    type="text"
                    className="form-control iform"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
            />

            {(username === 'Tortilla') && <Message/>}

        </>
    )
}