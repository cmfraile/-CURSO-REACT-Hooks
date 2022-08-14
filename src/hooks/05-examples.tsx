import { useEffect, useState } from "react"

const useFetch = (url:string) => {
    const [ state , setState ] = useState({data:null,isLoading:true,error:null})
    const getFetch = async() => {
        setState({...state,isLoading:true});
        await(await fetch(url)).json()
        .then(data => {setState({data,isLoading:false,error:null})})
        .catch(error => {setState({data:null,isLoading:false,error})})
    }
    useEffect(() => { getFetch() },[url]);
    return({...state});
}

export const multipleCustomHooks = () => {

    const { data , isLoading , error } = useFetch('https://www.breakingbadapi.com/api/quotes')

    return(
        <>
        <h1 style={{color:(error) ? 'red' : 'black'}} >{(error) ? 'ERROR!' : (isLoading) ? 'Cargando' : 'Breaking Bad Quotes'}</h1>
        <p>{(data) && JSON.stringify(data[0])}</p>
        </>
    )
}