import { Link , NavLink } from "react-router-dom"

export const Nav = () => {

    {/*return(<><Link to='/'>About</Link><Link to='/login'>Login</Link></>)*/}

    return(
        <>
        <NavLink    to='/'> About </NavLink>
        <NavLink    to='/login'
                    className={(ia) => {console.log(ia);return ''}}
                    style={(ia) => {console.log(ia);return {color:'blue'}}}
                    > Login </NavLink>
        </>
    )
}