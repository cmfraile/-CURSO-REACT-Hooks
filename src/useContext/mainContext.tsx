import { Route, Routes, Navigate } from 'react-router-dom'
import { about as About } from '.';
import { login as Login } from '.';
import './useContext.sass'

export const mainContext = () => {

    return(
        <>
            <h1>Main</h1>
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