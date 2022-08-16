import { useReducer } from "react"
import './todo.sass'

const todocraft = (todo:string) => {return {id:new Date().getTime(),todo,done:false}};
const iState:{id:number,todo:string,done:boolean}[] = [todocraft('Estado génesis')];

const todoReducer = (initialState:{id:number,todo:string,done:boolean}[]|[] = [],action:{type:string,payload?:{id:number,todo:string,done:boolean}}) => {
    if(!action.payload){return initialState}
    switch(action.type){
        default:break;
    }
}

export const TodoApp = () => {

    const [ todos , dispatchTodo ] = useReducer(todoReducer,iState);

    return (
        <>
        <h2>Todo app</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    {(todos) && (<ul>{todos.map( ({id,todo}) => {return <li className="litem" key={id}>{todo} <button className="btn btn-danger"></button></li>})}</ul>)}
                </div>
                <div className="col">
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