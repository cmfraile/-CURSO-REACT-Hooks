import React from 'react';
import { fireEvent, render , renderHook, screen, waitFor } from '@testing-library/react'
import { multipleCustomHooks as MCH, multipleCustomHooks } from '../../src/hooks/05-examples'; 
import { useFetch } from '../../src/hooks/05-examples';
import { useCounter } from '../../src/hooks/02-customHooks';

jest.mock('../../src/hooks/02-customHooks') ;
jest.mock('../../src/hooks/05-examples') ;

const main = () => {

    const url:string = 'https://www.breakingbadapi.com/api/quotes';
    
    test('debe de mostrar un quote a través de mocks)',async() => {
        (useFetch as jest.Mock).mockReturnValue({data:[1,2,3,4],isLoading:false,error:null});
        const rHOOK = renderHook(() => useFetch(url))
        render(<MCH/>);
        await waitFor(() => {
            expect(rHOOK.result.current.data?.length).toBeGreaterThan(0);
            expect(rHOOK.result.current.isLoading).toBeFalsy();
        });
        screen.debug();
    });

    test('debe de llamar la funcion de incrementar',() => {
        //(useFetch as jest.Mock).mockReturnValue({data:[1,2,3,4],isLoading:false,error:null});
        render(<MCH/>);
        screen.debug();
        //console.log(screen.getAllByRole('*'));
    })

}

describe('pruebas con mocks del fichero examples',main)