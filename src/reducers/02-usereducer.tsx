import { useReducer } from "react"
import './todo.sass';

interface initialState {id:number,todo:string,done:boolean} ; interface todobj {id:number,todo:string,done:boolean} ;

const todoReducer = (initialState:initialState = [todocraft('Estado génesis')],action:{type:string,payload?:initialState}) => {
    if(!action.payload){return initialState}
    switch(action.type){
        default:break;
    }
}
const todocraft = (todo:string):todobj => {return {id:new Date().getTime(),todo,done:false}};
const initialState:initialState|[] = [todocraft('Estado génesis')];


const TodoItem = ({todos}:{todos:{id:number,todo:string,done:boolean}[]}):JSX.Element => {

    return(
        <>
        <ul>{todos.map( ({id,todo}) => {return <li className="litem" key={id}>{todo} <button className="btn btn-danger"></button></li>})}</ul>
        </>
    )
}

export const TodoApp = () => {

    const [ todos , dispatchTodo ] = useReducer(todoReducer,iState);

    return (
        <>
        <h2>Todo app : {todos?.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    <TodoItem todos={todos}/>
                </div>
                <div className="col">
                    {/*TodoAdd y onNewTodo*/}
                    <input      type="text"
                                className="form-control iform"
                                placeholder="nueva tarea"
                                name="newtodo"
                    />
                </div>
            </div>
        </div>
        </>
    )
}