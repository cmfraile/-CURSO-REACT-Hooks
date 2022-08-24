import React from "react";
import { TodoApp } from '../../src/todocontexttarea/maintodo';
import { todoProvider as TDP } from "../../src/todocontexttarea/context/todoContext";
import { screen , render } from '@testing-library/react';

JSON.parse = jest.fn().mockImplementationOnce(() => []);

const main = () => {

    test('snapshot:',() => {
        expect(render(<TDP><TodoApp/></TDP>).container).toMatchSnapshot();
    });

    

}

describe('pruebas sobre mi TodoApp y el context',main);