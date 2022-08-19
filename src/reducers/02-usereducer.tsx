import { Reducer, useEffect, useReducer, useState } from "react"
import { any, random } from "underscore";
import { useForma } from '../hooks/04-formwithcustomhook'
import './todo.sass';

enum tiposacc {add = '[TODO] Add Todo',nuke = '[TODO] Nuke Todo'};
interface todobj {id:number,todo:string,done:boolean};interface action {type:tiposacc,payload:todobj} ;

const todocraft = (todo:string):todobj => {return {id:(new Date().getTime() + random(0,10000)),todo,done:false}};
const todoReducer = (state:todobj[]|[] = [],action:action) => {
    if(!action){return state}
    const { type , payload } = action ; const { add , nuke } = tiposacc ;
    switch(type){
        case add : return [...state,payload];
        case nuke : return [];
        default : throw new Error();
    }
}

const TodoList = ({todos = []}:any) => {return(<><ul>{(todos) && todos.map(({id,todo,done}:todobj) => {return <TodoItem key={id} id={id} todo={todo} done={done}/>})}</ul></>)};
const TodoItem = ({id,todo,done}:any) => {return(<li className="litem" key={id}>{todo}<button className="btn btn-danger" onClick={() => {}} ></button></li>)};
const TodoAdd = ({todos,onNewTodo,onNuke}:{onNewTodo:any,todos:todobj[],onNuke:any}) => {

    const {todo,onInputChange,onResetForm} = useForma({todo:''});

    const validarmiddle = (todo:string):boolean => {
        const caso = todo.trim().toUpperCase();
        if(todo.trim().length <= 2){return false};
        if(todos.map(x => x.todo.toUpperCase()).includes(caso)){return false};
        return true
    }
    
    return(
        <>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                if(!validarmiddle(todo)){return}
                onNewTodo(todocraft(todo.trim()));
                onResetForm();
            }}>
                <input      className="form-control"
                            type="text"
                            name="todo"
                            value={todo}
                            placeholder={'añadir todo'}
                            onChange={onInputChange}
                />
            </form>
            <button className="btn btn-danger" onClick={() => {if(confirm('esta seguro de mandar todo a la megamierda?')){onNuke()}}}>NUKE</button>
        </>
    )

}

export const TodoApp = () => {

    const [ todos , todosDispatch ] = useReducer(todoReducer,[],() => {
        const parse:any = JSON.parse(localStorage.getItem('todos') || "");
        if(parse == ""){return []}else{return parse};
    });
    useEffect(() => { localStorage.setItem('todos',JSON.stringify(todos)) },[todos]);

    const handleNewTodo = (todo:todobj) => {
        const { add } = tiposacc;
        const action:action = {type:add,payload:todo};
        todosDispatch(action);
    }

    const handlenuke = () => {
        const { nuke } = tiposacc;
        const action:action = {type:nuke,payload:todocraft('Se va todo a la mierda')};
        todosDispatch(action);
    }

    return (
        <>
        <h2>Todo app : {todos.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col"><TodoList todos={todos} /></div>
                <div className="col"><TodoAdd onNewTodo={handleNewTodo} onNuke={handlenuke} todos={todos}/></div>
            </div>
        </div>
        </>
    )
}