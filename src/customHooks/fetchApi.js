import { useState, useEffect } from "react";


const useFetchApi=(url)=>{
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{setData(res.results)})
    },[url])
    return [data];
}

export default useFetchApi