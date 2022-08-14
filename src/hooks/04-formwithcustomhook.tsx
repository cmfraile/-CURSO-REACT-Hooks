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

export const Formwithcustomhook = () => {

    const [formState,setFormState] = useState({username:'',email:'',password:''});
    const formgenerator:any = {username:formState.username,email:formState.email,password:formState.password};
    
    const onInputChange = ({target}:any) => {
        const { name , value } = target;
        setFormState({
            ...formgenerator,
            [ name ]:value
        })
    }

    /*
    useEffect(() => {console.log('username!')},[username]);
    useEffect(() => {console.log('email!')},[email]);
    */

    return (
        <>
            <h2>Form with custom hook</h2>
            {Object.keys(formgenerator).map((x:string) => {
                return(
                    <input
                        key={x}
                        type={(x === 'password') ? x : 'text'}
                        className="form-control iform"
                        placeholder={x}
                        name={x}
                        value={formgenerator[x]}
                        onChange={onInputChange}
                    />
                )
            })}
            {
            //(username === 'Tortilla') && <Message/>
            }

        </>
    )
}