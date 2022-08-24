import React from "react";
import { TodoApp } from '../../src/todocontexttarea/maintodo';
import { todoContext as TDC } from "../../src/todocontexttarea/context/todoContext";
import { todocrudch } from "../../src/todocontexttarea/hooks/todocrudhook";
import { screen , render, renderHook } from '@testing-library/react';

JSON.parse = jest.fn().mockImplementationOnce(() => []);

const main = () => {

    beforeEach(() => {jest.clearAllMocks()});

    test('snapshot:',() => {expect(render(<TDC.Provider value={{...todocrudch()}}><TodoApp/></TDC.Provider>).container).toMatchSnapshot()});
    test('debe de introducir un valor en el todo',() => {

    })

    

}

describe('pruebas sobre mi TodoApp y el context',main);