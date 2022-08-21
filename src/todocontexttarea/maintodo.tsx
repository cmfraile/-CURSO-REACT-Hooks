import { useContext, useEffect } from 'react';
import { useForma } from '../hooks/04-formwithcustomhook';
import { todoContext } from './context/todoContext';
import './todo.sass';

interface todobj {id:number,todo:string,done:boolean};

const TodoList = ({todos = []}:{todos:todobj[] | []}) => {
    console.log('render de lista');
    return(<><ul>{(todos) && todos
        .sort((a,b) => {
            const sorta = a.done ; const sortb = b.done;
            if(sorta == sortb){return 0}
            if(sorta){return 1} ; if(sortb){return -1}
            return 0;
        })
        .map(({id,todo,done}:todobj,i:number) => {
            const marginbool = ():boolean => {if(i == 0){return false} ; if(done && !todos[i-1].done){return true}else{return false}}
            return <TodoItem key={id} id={id} todo={todo} done={done} margin={marginbool()}/>})}</ul></>
        )};
const TodoItem = ({id,todo,done,margin}:any) => {
    const { setEdit } = useContext(todoContext);
    const { delTODO , endTODO } = useContext(todoContext);
    return(<><li    className={`litem ${(margin) ? 'margin' : ''}`} 
                    style={{textDecoration: (done) && 'line-through'}}
                    onDoubleClick={() => {setEdit({id,todo,done})}} 
                    key={id}>{todo}
    <button className='btn btn-danger' onClick={() => {delTODO({id,todo,done})}}></button>
    <button className='btn btn-primary' disabled={done} onClick={() => {endTODO({id,todo,done})}}></button>
    </li></>)
};
const TodoAdd = ({todos,onNewTodo,onEditTodo,onNuke}:{onNewTodo:any,onEditTodo:any,todos:todobj[],onNuke:any}) => {

    const {todo,onInputChange,onResetForm} = useForma({todo:''});
    const { edit , setEdit } = useContext<{edit:todobj,setEdit:any}>(todoContext);

    const validarmiddle = (todo:string):boolean => {
        const caso = todo.trim().toUpperCase();
        if(todo.trim().length <= 2){return false};
        if(todos.map(x => x.todo.toUpperCase()).includes(caso)){return false};
        return true
    }

    useEffect(() => {
        if(!edit){return}
        onInputChange({target:{name:'todo',value:edit.todo}});
    },[edit])
    
    return(
        <>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                if(!validarmiddle(todo)){return}
                if(!edit){onNewTodo(todo.trim())}
                if(edit){onEditTodo({id:edit.id,todo,done:edit.done}) ; setEdit(undefined)}
                onResetForm();
            }}>
            <input
            className="form-control"
            type="text"
            name="todo"
            value={todo}
            placeholder={'añadir todo'}
            onChange={onInputChange}
            />
            </form>
            <button className="btn btn-danger" disabled={(todos.length == 0) && true} onClick={() => {if(confirm('esta seguro de mandar todo a la megamierda?')){onNuke() ; setEdit(undefined)}}}>NUKE</button>
            {(edit) && <code>{JSON.stringify(edit.todo)}</code>}
        </>
    )

}

export const TodoApp = () => {

    const { todos , addTODO , nukeTODO , editTODO } = useContext(todoContext);

    return (
        <>
        <h2>Todo app : {todos.length} tareas pendientes</h2>
        <div className="container">
            <div className="row">
                <div className="col"><TodoList todos={todos} /></div>
                <div className="col"><TodoAdd   onNewTodo={addTODO}
                                                onEditTodo={editTODO}
                                                onNuke={nukeTODO}
                                                todos={todos}/></div>
            </div>
        </div>
        </>
    )
}