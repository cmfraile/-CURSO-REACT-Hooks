import { useReducer, useState } from "react"
import { random } from "underscore";
import { useForma } from '../hooks/04-formwithcustomhook'
import './todo.sass';

interface todobj {id:number,todo:string,done:boolean} ; interface action {type:string,payload?:todobj} ;

const todocraft = (todo:string):todobj => {return {id:(new Date().getTime() + random(0,10000)),todo,done:false}};
const todoReducer = (initialState:todobj[]|[] = [],action:action) => {
    if(!action){return initialState}
    switch(action.type){
        default:break;
    }
}

const TodoList = ({todos = []}:any) => {
    const [ todoses, setTodoses ] = useState<todobj[]|[]>(todos)
    return(<><ul>{(todoses) && todoses.map(({id,todo,done}:todobj) => {return <TodoItem key={id} id={id} todo={todo} done={done}/>})}</ul></>)
}

const TodoItem = ({id,todo,done}:any) => {
    
    return(<li className="litem" key={id}>{todo}<button className="btn btn-danger" onClick={() => {console.log(id)}} ></button></li>)
}

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

    const [ todos , dispatchTodo ] = useReducer(todoReducer,[todocraft('genesis')]);

    console.log(todos);

    return (
        <>
        <h2>Todo app : {todos?.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col"><TodoList todos={todos}/></div>
                <div className="col"><TodoAdd onNewTodo={console.log} todos={todos} /></div>
            </div>
        </div>
        </>
    )
}