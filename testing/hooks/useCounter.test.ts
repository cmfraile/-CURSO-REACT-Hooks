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
        
        /*
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect( counter ).toBe(100)
        */

        const rHOOK = renderHook(() => useCounter());
        const { sc } = rHOOK.result.current;

        act(() => {sc('+');sc('+');sc('+')});

        expect(rHOOK.result.current.counter).toBe(3)

    });
}

describe('pruebas en el useCounter',main)

/*
Estuve investigando documentación y consultando en StackOverflow.

Partiendo de que useState es asíncrono y que el state actualiza su valor cada vez que existe una renderizacion. Hay que recordar que estamos en un ambiente de pruebas y que no se vuelve a renderizar el componente al surgir un cambio en el state, en este caso el valor del counter.

La razón de que el decrement() no haga la acción nos veces es porque básicamente estamos haciendo esto:

setCounter(100 - 1) 
setCounter(100 - 1)
cuando lo llamamos en el act ( ).

Y no cambia porque el hook se renderiza una vez y el valor del state se actualiza en un siguiente render. Entonces no importa cuantas veces lo llamemos ahí, va a seguir siendo 99.

Para poder hacer que el valor decremente dos veces y el valor esperado sea 98, hay que implementar un callback en nuestras funciones del hook 'useCounter' para obtener el valor mas reciente del state. Como ya lo saben un callback nos avisa cuando una función hizo su trabajo, en este caso al hacer un callback en un 'setState' o 'setCounter' especificamente, estamos llamando al valor mas actualizado del state. Es como que dijera: "Espera, deja obtengo el state mas actualizado del contador para volverlo a disminuir en 1"

Implementar un callback en setSate es altamente recomendado cuanto depende de un valor previo

setCounter(valor_previo => valor_previo - 1)
Este mismo cambio se podría implementar en el increment( ) y al llamarlo dos veces en el act, tiene el comportamiento deseado.

Espero que los instructores puedan refinar esta respuesta o consolidar ciertos puntos, sobre todo los que marqué con negrillas.

Vine a este curso con un javascript superbásico, react en 0, asi que he estado leyendo bastante.

Saludos!
*/