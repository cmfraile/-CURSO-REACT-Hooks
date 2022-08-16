import { useReducer } from "react"

const todocraft = (todo:string) => {return {id:new Date().getTime(),todo,done:false}};
const iState:{id:number,todo:string,done:boolean}[]|[] = [todocraft('Estado génesis')];

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
        </>
    )
}