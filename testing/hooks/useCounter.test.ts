import { renderHook , act } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

const main = () => {

    test('debe de retornar los valores por defecto',() => {
        const { counter , sc } = renderHook(() => useCounter()).result.current;
        expect(counter).toBe(0);
        expect(sc).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100',() => {
        const { counter } = renderHook(() => useCounter(100)).result.current;
        expect(counter).toBe(100);
    });

    test('debemos de comprobar que funciona la funcion [sc]',() => {

        //Es importante llamar a los primitivos en el momento presente de comprobarse ya que si los sacamos por desestructuración, esa variable no va por referencia, y por ende no va a cambiar su valor:

        const valorinicial:number = 12;
        const rHOOK = renderHook(() => useCounter(valorinicial));
        const { sc } = rHOOK.result.current;

        act(() => {sc('+');sc('+');sc('+')}) ; expect(rHOOK.result.current.counter).toBe(valorinicial + 3) ;
        act(() => {sc('-')}) ; expect(rHOOK.result.current.counter).toBe(valorinicial + 2) ;
        act(() => {sc('R')}) ; expect(rHOOK.result.current.counter).toBe(valorinicial) ;

    });
}

describe('pruebas en el useCounter',main);