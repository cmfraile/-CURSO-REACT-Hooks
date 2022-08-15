import * as hooks from '../src/hooks';

const App = () => {
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
            </div>
        </div>
        </>
    )
}

export default App