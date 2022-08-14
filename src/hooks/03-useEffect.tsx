import { useState , useEffect } from "react"

const Message = () => {

    const [ xy , setXy ] = useState<{x:number,y:number}>({x:0,y:0});

    useEffect(() => {
        const onMouseMove = ({x,y}:{x:number,y:number}) => {setXy({x,y})};
        window.addEventListener('mousemove',onMouseMove);
        return () => {window.removeEventListener('mousemove',onMouseMove)};
    })

    return(<><h3>Usuario existe{JSON.stringify(xy)}</h3></>);
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