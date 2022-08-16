export const Introreducer = () => {
    const todoReducer = (state = [{id:1,todo:'recolectar olivas',done:false}] , action?:any) => {
        if(!action){return state};
        switch(action.type){
            case '[ TODO ] addtodo' : return [...state,action.payload] ;
            default:return state;
        }
    }
    let todos = todoReducer();
    todos = todoReducer(todos,{type:'[ TODO ] addtodo',payload:{id:2,todo:'recolectar asitunas',done:false}});
    todos = todoReducer(todos,{type:'[ TODO ] addtodo',payload:{id:3,todo:'recolectar patatas',done:false}});
    console.log(todos);

    return (<><h2>Intro reducer</h2></>)
}