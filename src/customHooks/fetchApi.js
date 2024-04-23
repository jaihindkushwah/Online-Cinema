import { useState, useEffect } from "react";


const useFetchApi=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                setLoading(true);
                const res = await fetch(url);
                const data = await res.json();
                // console.log(data);
                setLoading(false);
                setData(data.results);
            } catch (error) {
                // alert("Something went wrong");
                setLoading(false);
            }
        }
        fetchData();
    },[url])
    return {data,loading};
}
export default useFetchApi

 export const useFetchApiForSingleData=(url)=>{
    
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                setLoading(true);
                const res = await fetch(url);
                const data = await res.json();
                // console.log(data);
                setLoading(false);
                setData(data);
            } catch (error) {
                // alert("Something went wrong");
                setLoading(false);
            }
        }
        fetchData();
    },[url])
    return {data,loading};
}

// export {useFetchApiForSingleData}


