import { useReducer ,useEffect, useState } from "react";
import { random } from "underscore";

enum tiposacc {add = '[TODO] Add Todo',del = '[TODO] Del Todo',nuke = '[TODO] Nuke Todo',end = '[TODO] end TODO',edit = '[TODO] edit TODO'};
interface todobj {id:number,todo:string,done:boolean};interface action {type:tiposacc,payload:todobj} ;

const todocraft = (todo:string):todobj => {return {id:(new Date().getTime() + random(0,10000)),todo,done:false}};
const todoReducer = (state:todobj[]|[] = [],action:action) => {
    if(!action){return state}
    const { type , payload } = action ; const { add , nuke , del , end } = tiposacc ;
    switch(type){
        case add : return [...state,payload];
        case del : return state.filter(x => x.id !== payload.id);
        case end : return state.map(x => {if(x.id == payload.id){x.done = true ; return x}else{return x}});
        case nuke : return [];
        default : throw new Error();
    }
}

export const todocrudch = () => {
    const [ todos , todosDispatch ] = useReducer(todoReducer,[],() => {
        const parse:any = JSON.parse(localStorage.getItem('todos') || "");
        if(parse == ""){return []}else{return parse};
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
        nukeTODO:() => {
            todosDispatch({type:tiposacc.nuke,payload:todocraft('nuke')})
        }
    }
    return({todos,todoCRUD,...todoCRUD,edit,setEdit});
}