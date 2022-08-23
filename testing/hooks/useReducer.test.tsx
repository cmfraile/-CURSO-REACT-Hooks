import React from 'react';
import { render } from '@testing-library/react';
import { todocraft , todoReducer , tiposacc , todobj , action , TodoApp } from '../../src/reducers';

const main = () => {

    const istate = [todocraft('primera tarea de prueba')];

    test('debe de regresar el estado inicial',() => {
        const newState = todoReducer(istate,undefined);
        expect(newState).toBe(istate);
    });

    test('agregar un TODO',() => {
        const agregado = todocraft('segundo todo agregado')
        const action:action = {type:tiposacc.add,payload:agregado};
        const nstate = todoReducer(istate,action);
        expect(nstate.length).toBe(2);
        expect(nstate).toContain(action.payload);
        expect(nstate).toEqual([...istate,agregado]);
    });
    
};

describe('todo reducer app (El primero!!!)',main);