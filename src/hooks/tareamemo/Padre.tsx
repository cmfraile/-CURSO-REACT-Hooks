import { Hijo } from './Hijo'
import { useCallback, useState, useEffect } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    //const incrementar = ( num:number ) => {setValor( valor + num )};
    const incrementar = useCallback((value:number) => {setValor((c) => c+value)},[]);

    const fabricar = () => {
        let caso:any[] = [];
        numeros.map(n => {caso.push(<Hijo key={n} numero={n} incrementar={ incrementar }/>)});
        return caso;
    };

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {fabricar()}

            {/*
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            */}

            {/* <Hijo /> */}
        </div>
    )
}
