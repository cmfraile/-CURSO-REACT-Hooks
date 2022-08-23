import { todocraft , todoReducer , tiposacc , todobj , action } from '../../src/todocontexttarea/hooks/todocrudhook';

//JSON.parse = jest.fn().mockImplementationOnce(() => []);

const begin = () => {
    const payload = todocraft('añadido');
    const istate = todoReducer([],{type:tiposacc.add,payload});
    return {payload,istate};
}

const main = () => {

    test('add del todoreducer',() => {
        const { istate } = begin();
        expect(istate).toEqual([{done:expect.any(Boolean),id:expect.any(Number),todo:expect.any(String)}]);
    });

    test('del del todoreducer',() => {
        const { payload , istate } = begin();
        const state2 = todoReducer(istate,{type:tiposacc.del,payload});
        expect(state2).toEqual([]);
    })

    test('end del todoreducer',() => {
        const { payload , istate } = begin();
        const state2 = todoReducer(istate,{type:tiposacc.end,payload});
        expect(state2[0].done).toBeTruthy();
    });

    test('edit del todoreducer',() => {
        const { payload , istate } = begin();
        const payload2 = {...payload,todo:'nuevo todo'}
        const state2 = todoReducer(istate,{type:tiposacc.edit,payload:payload2});
        expect(state2[0].todo).toBe('nuevo todo');
    });

    test('nuke del todoreducer',() => {
        const { payload , istate } = begin();
        const state2 = todoReducer(istate,{type:tiposacc.nuke,payload:todocraft('nuke')});
        expect(state2).toStrictEqual([]);
    })

}

describe('Probemos mi reducer (que no mi todocrud)',main)