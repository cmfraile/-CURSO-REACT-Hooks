import { useState , useEffect } from "react"

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

    useEffect(() => {
        console.log('uE CALLED!')
    })

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
        </>
    )
}