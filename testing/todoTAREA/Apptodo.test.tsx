import React from 'react';
import { TodoApp } from '../../src/todocontexttarea/maintodo';
import { render , screen } from '@testing-library/react';

const main = () => {

    /*Pruebas que hace el profe sin usar context:
        - Renderizar correctamente.
        - 
    */

    test('snapshot',() => {
        expect(render(<TodoApp/>).container).toMatchSnapshot();
        screen.debug();
    });

}

describe('pruebas sobre el <AppTodo>',main);