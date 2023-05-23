import useFetchApi from "../../customHooks/fetchApi";
import { movieListUrl } from "../../movieApi/urls";

const  MovieListData= ()=>{
    // const [data,setData]=useState([]);

    const p1= useFetchApi(movieListUrl(1));
    const p2=useFetchApi(movieListUrl(2));
    const p3=useFetchApi(movieListUrl(3));
    const p4=useFetchApi(movieListUrl(4));
    const p5=useFetchApi(movieListUrl(5));
    const p6= useFetchApi(movieListUrl(6));

    return([...p1[0],...p2[0],...p3[0],...p4[0],...p5[0],...p6[0]]);
}
export default MovieListData;