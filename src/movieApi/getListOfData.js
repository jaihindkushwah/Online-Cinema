import useFetchApi from "../customHooks/fetchApi";
// import { getUrl } from "./urls";

const ListData = (getUrl) => {
  // const [data,setData]=useState([]);

  const p1 = useFetchApi(getUrl(1));
  const p2 = useFetchApi(getUrl(2));
  const p3 = useFetchApi(getUrl(3));
  const p4 = useFetchApi(getUrl(4));
  const p5 = useFetchApi(getUrl(5));
  const p6 = useFetchApi(getUrl(6));

  return [...p1[0], ...p2[0], ...p3[0], ...p4[0], ...p5[0], ...p6[0]];
};
export default ListData;
