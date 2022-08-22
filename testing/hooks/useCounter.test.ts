import { renderHook , screen } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

const main = () => {

    test('debe de retornar los valores por defecto',() => {
        const {counter,sc} = renderHook(() => useCounter()).result.current;
        expect(counter).toBe(0);
        expect(sc).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100',() => {
        const { counter , sc } = renderHook(() => useCounter(100)).result.current;
        expect(counter).toBe(100);
    })
}

describe('pruebas en el useCounter',main)