import * as hooks from '../src/hooks';

const App = () => {
    return(
        <>
        <h1>HooksApp</h1>
        <div className='container'>
            <div className="row">
                <div className="col"><hooks.useStateHook/></div>
            </div>
        </div>
        </>
    )
}

export default App