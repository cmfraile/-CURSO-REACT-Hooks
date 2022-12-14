import { Route, Routes, Navigate , Link } from 'react-router-dom';
import { about as About } from '.';
import { login as Login } from '.';
import { Nav } from './nav';
import { userProvider as UP } from './context/userContext';
import './useContext.sass'



export const mainContext = () => {

    return(
        <UP>
            <h1>Main</h1>
            {/* La diferencia entre a href y Link es que Link no actualiza toda la web, manteniendo el estado: */}
            <Nav/>
            <hr />
            <Routes>
                <Route path='/' element={<About />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/*' element={<About />} ></Route>
                <Route path='/*' element={<Navigate to='/El pepe'/>}></Route>
            </Routes>
        </UP>
    )
}