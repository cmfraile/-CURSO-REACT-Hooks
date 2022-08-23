import { renderHook } from '@testing-library/react';
import { todocrudch } from '../../src/todocontexttarea/hooks/todocrudhook';

const main = () => {

    const rtcHOOK = renderHook(() => todocrudch());

    test('devolver un estado inicial',() => {
        console.log()
    });

    test('addTODO',() => {

    });
    
    test('nukeTODO',() => {

    });

    test('delTODO',() => {
        
    });

}

describe('Probemos mi reducer',main)