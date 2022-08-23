import React from 'react';
import { fireEvent, render , renderHook, screen, waitFor } from '@testing-library/react'
import { multipleCustomHooks as MCH, multipleCustomHooks } from '../../src/hooks/05-examples'; 
import { useFetch } from '../../src/hooks/05-examples';
import { useCounter } from '../../src/hooks/02-customHooks';

const main = () => {

    const url:string = 'https://www.breakingbadapi.com/api/quotes';

    test('debe de mostrar el componente por defecto',() => {
        render(<MCH/>);
        expect( screen.getByText('Cargando') );
        expect( screen.getByRole('heading',{name:'Cargando'}) );
        const nB:HTMLButtonElement = screen.getByRole('button',{name:'+1'}) ; const rB:HTMLButtonElement = screen.getByRole('button',{name:'RESET'}) ;
        expect(nB.disabled && rB.disabled).toBe(false);
    });

    test('vamos a probar el fetch para recordar como se hacia',async() => {
        const rHOOK = renderHook(() => useFetch(url));
        await waitFor(() => expect(rHOOK.result.current.data?.length).toBeGreaterThan(0),{timeout:3000});
        expect(rHOOK.result.current.isLoading).toBeFalsy();
    });

    test('mostrar un quote sin mock',async() => {
        render(<MCH/>)
        const rHOOK = renderHook(() => useFetch(url));
        await waitFor(() => expect(rHOOK.result.current.data?.length).toBeGreaterThan(0),{timeout:3000});
        expect(screen.getByLabelText('quote').innerHTML).toBeTruthy();
        console.log(screen.getByLabelText('quote').innerHTML);
    });

};

describe('Pruebas en <MultipleCustomHooks>',main);