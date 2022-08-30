import { useReducer ,useEffect, useState } from "react";
import { random } from "underscore";

export enum tiposacc {add = '[TODO] Add Todo',del = '[TODO] Del Todo',nuke = '[TODO] Nuke Todo',end = '[TODO] end TODO',edit = '[TODO] edit TODO'};
export interface todobj {id:number,todo:string,done:boolean};export interface action {type:tiposacc,payload:todobj} ;

export const todocraft = (todo:string):todobj => {return {id:(new Date().getTime() + random(0,10000)),todo,done:false}};
export const todoReducer = (state:todobj[]|[] = [],action:action) => {
    if(!action){return state}
    const { type , payload } = action ; const { add , nuke , del , end , edit } = tiposacc ;
    switch(type){
        case add : return [...state,payload];
        case del : return state.filter(x => x.id !== payload.id);
        case edit : return new Array().concat(state.filter(x => x.id !== payload.id),payload) 
        case end : return state.map(x => {if(x.id == payload.id){x.done = true ; return x}else{return x}});
        case nuke : return [];
        default : throw new Error();
    }
}

export const todocrudch = () => {
    const [ todos , todosDispatch ] = useReducer(todoReducer,[],() => {
        const caso = localStorage.getItem('todos');
        if(caso){return JSON.parse(caso)}else{return {logged:false}}
    });
    const [ edit , setEdit ] = useState<todobj|undefined>();
    useEffect(() => { localStorage.setItem('todos',JSON.stringify(todos))},[todos]);
    const todoCRUD = {
        addTODO:(todo:string) => {
            const action:action = {type:tiposacc.add,payload:todocraft(todo)};
            todosDispatch(action);
        },
        delTODO:(todo:todobj) => {
            const action:action = {type:tiposacc.del,payload:todo};
            todosDispatch(action);
        },
        endTODO:(todo:todobj) => {
            const action:action = {type:tiposacc.end,payload:todo};
            todosDispatch(action);
        },
        editTODO:(todo:todobj) => {
            const action:action = {type:tiposacc.edit,payload:todo};
            todosDispatch(action);
        },
        nukeTODO:() => {
            todosDispatch({type:tiposacc.nuke,payload:todocraft('nuke')})
        }
    }
    return({todos,todoCRUD,...todoCRUD,edit,setEdit});
}