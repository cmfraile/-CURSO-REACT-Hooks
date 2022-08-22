import React from 'react';
import { render , renderHook, screen, waitFor } from '@testing-library/react'
import { multipleCustomHooks as MCH } from '../../src/hooks/05-examples'; 
import { useFetch } from '../../src/hooks/05-examples';

const main = () => {

    test('debe de mostrar el componente por defecto',() => {
        render(<MCH/>);
        expect( screen.getByText('Cargando') );
        expect( screen.getByRole('heading',{name:'Cargando'}) );
        const nB:HTMLButtonElement = screen.getByRole('button',{name:'+1'}) ; const rB:HTMLButtonElement = screen.getByRole('button',{name:'RESET'}) ;
        expect(nB.disabled && rB.disabled).toBe(false);
    });

    test('vamos a probar el fetch para recordar como se hacia',async() => {
        const url:string = 'https://www.breakingbadapi.com/api/quotes';
        const rHOOK = renderHook(() => useFetch(url));
        await waitFor(() => expect(rHOOK.result.current.data?.length).toBeGreaterThan(0),{timeout:3000});
        expect(rHOOK.result.current.isLoading).toBeFalsy();
    });

    test('debe de mostrar un quote (a traves de un mock)',() => {
        render(<MCH/>);
        screen.debug();
    });

};

describe('Pruebas en <MultipleCustomHooks>',main);