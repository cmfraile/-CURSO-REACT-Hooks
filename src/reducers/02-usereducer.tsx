import { Reducer, useReducer, useState } from "react"
import { random } from "underscore";
import { useForma } from '../hooks/04-formwithcustomhook'
import './todo.sass';

enum tiposacc{add = '[TODO] Add Todo'} ; interface todobj {id:number,todo:string,done:boolean} ; interface action {type:tiposacc,payload:todobj} ;

const todocraft = (todo:string):todobj => {return {id:(new Date().getTime() + random(0,10000)),todo,done:false}};

const todoReducer = (state:todobj[]|[] = [],action?:action) => {
    if(!action){return state}
    const { type , payload } = action;
    switch(type){
        case tiposacc.add : return [...state,payload];
        default : throw new Error();
    }
}
const TodoList = ({todos = []}:any) => {return(<><ul>{(todos) && todos.map(({id,todo,done}:todobj) => {return <TodoItem key={id} id={id} todo={todo} done={done}/>})}</ul></>)};
const TodoItem = ({id,todo,done}:any) => {return(<li className="litem" key={id}>{todo}<button className="btn btn-danger" onClick={() => {console.log(id)}} ></button></li>)};

const TodoAdd = ({onNewTodo,todos}:any) => {

    const {todo,onInputChange,onResetForm} = useForma({todo:''});
    
    return(
        <>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                if(todo.trim().length<=2){return};
                if(todos.map((x:string) => x.toUpperCase).includes(todo.trim().toUpperCase())){return};
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
        </>
    )

}

export const TodoApp = () => {

    const [ todos , todosDispatch ] = useReducer(todoReducer,[]);

    return (
        <>
        <h2>Todo app : {todos.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col"><TodoList todos={todos}/></div>
                <div className="col"><TodoAdd onNewTodo={console.log} todos={todos} /></div>
            </div>
        </div>
        </>
    )
}