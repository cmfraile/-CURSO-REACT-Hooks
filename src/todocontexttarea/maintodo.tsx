import { useContext } from 'react';
import { useForma } from '../hooks/04-formwithcustomhook';
import { todoContext , todoProvider as TDP } from './context/todoContext';
import './todo.sass';

interface todobj {id:number,todo:string,done:boolean};

const TodoList = ({todos = []}:any) => {return(<><ul>{(todos) && todos.map(({id,todo,done}:todobj) => {return <TodoItem key={id} id={id} todo={todo} done={done}/>})}</ul></>)};
const TodoItem = ({id,todo,done}:any) => {
    return(<li className="litem" key={id}>{todo}<button className="btn btn-danger" onClick={() => {console.log('wea')}} ></button></li>)
};
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
                onNewTodo(todo.trim());
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

    const { todos , todoCRUD } = useContext(todoContext);

    return (
        <TDP>
        <h2>Todo app : {todos.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col"><TodoList todos={todos} /></div>
                <div className="col"><TodoAdd   onNewTodo={todoCRUD.addTODO}
                                                onNuke={todoCRUD.nukeTODO}
                                                todos={todos}/></div>
            </div>
        </div>
        </TDP>
    )
}