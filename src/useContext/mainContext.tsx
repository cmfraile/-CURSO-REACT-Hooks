import { Route, Routes, Navigate , Link } from 'react-router-dom'
import { about as About } from '.';
import { login as Login } from '.';
import './useContext.sass'

export const mainContext = () => {

    return(
        <>
            <h1>Main</h1>
            {/* La diferencia entre a href y Link es que Link no actualiza toda la web, manteniendo el estado: */}
            <Link to='/'>About</Link>
            <Link to='/login'>Login</Link>
            <hr />
            <Routes>
                <Route path='/' element={<About />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/*' element={<About />} ></Route>
                <Route path='/*' element={<Navigate to='/El pepe'/>}></Route>
            </Routes>
        </>
    )
}