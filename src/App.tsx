import * as hooks from '../src/hooks';
import * as reducers from '../src/reducers'
import { TodoApp } from '../src/reducers';
import * as context from '../src/useContext';


export const App = () => {
    return(
        <>
        <h1>HooksApp</h1>
        <div className='container'>
            <div className="row">
                <div className="col"><hooks.useStateHook/></div>
                <div className="col"><hooks.useCustomHook/></div>
            </div>
            <div className="row">
                <div className="col"><hooks.useEffectHook/></div>
                <div className="col"><hooks.Formwithcustomhook/></div>
            </div>
            <div className="row">
                <div className="col"><hooks.multipleCustomHooks/></div>
                <div className="col"><hooks.focusScreen/></div>
            </div>
            <div className="row">
                <div className="col"><hooks.memorize/></div>
                <div className="col"><hooks.memohook/></div>
            </div>
            <div className="row">
                <div className="col"><hooks.callbackhook/></div>
            </div>
            <div className="row">
                <div className="col"><hooks.Padre/></div>
            </div>
        </div>
        </>
    )
}

export const App2 = () => {
    return(
        <>
        <h1>UseReducer</h1>
            {/*<div className="row"><div className="col"><reducers.Introreducer/></div></div>*/}
            {/*<div className="row"><div className="col"><reducers.TodoApp/></div></div>*/}
        </>
    )
}

export const App3 = () => {
    return(
        <>
        <h1>useContext</h1>
        <div className="row"><div className="col"><context.mainContext/></div></div>
        </>
        
    )
}

export const TareaTODO = () => {
    return(
        <>
        <h1>Tarea TODO</h1>
        <div className="row"><div className="col"><TodoApp/></div></div>
        </>
    )
}