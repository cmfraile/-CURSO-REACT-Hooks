import React from 'react';
import { render , screen } from '@testing-library/react'
import { multipleCustomHooks as MCH } from '../../src/hooks/05-examples';

const main = () => {

    test('debe de mostrar el componente por defecto',() => {
        render(<MCH/>);

        expect( screen.getByText('Cargando') );
        expect( screen.getByRole('heading',{name:'Cargando'}) );
        const nB:HTMLButtonElement = screen.getByRole('button',{name:'+1'}) ; const rB:HTMLButtonElement = screen.getByRole('button',{name:'RESET'}) ;
        expect(nB.disabled && rB.disabled).toBe(false);
    
    });

};

describe('Pruebas en <MultipleCustomHooks>',main);