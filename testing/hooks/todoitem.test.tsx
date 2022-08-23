import React from 'react';
import { TodoItem } from '../../src/todocontexttarea/maintodo';
import { render , renderHook, screen } from '@testing-library/react';

import { todocraft } from '../../src/todocontexttarea/hooks/todocrudhook';

const main = () => {

    test('snapshot de componente',() => {
        const { id , done , todo ,margin } = {...todocraft('tododeprueba'),margin:false};
        expect(render(<TodoItem id={id} todo={todo} done={done} margin={margin} />).container).toMatchSnapshot();
        screen.debug();
    })
    
    test('vamos a descomponer el todoitemhook',() => {
        const { id , done , todo ,margin } = {...todocraft('tododeprueba'),margin:false};
        const rHOOK = renderHook(() => <TodoItem id={id} todo={todo} done={done} margin={margin} />);
    });
    
    test('debe de tacharse un todo completado', () => {
        const { id , todo ,margin } = {...todocraft('tododeprueba'),margin:false};
        render(<TodoItem id={id} todo={todo} done={true} margin={margin} />);
        const litem = screen.getByRole('listitem');
        expect(litem.style['_values']['text-decoration']).toBe("line-through");
    });

}

describe('pruebas en el todoitem',main);