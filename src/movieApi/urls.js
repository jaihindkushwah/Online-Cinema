// const imageurls='https://image.tmdb.org/t/p/w500';
// const trendingAll='https://api.themoviedb.org/3/trending/all/day?language=en-US'; // all/day or all/week
// const popularTvSeries='https://api.themoviedb.org/3/tv/popular';
// const movieList='https://api.themoviedb.org/3/genre/movie/list';
// const tvList='https://api.themoviedb.org/3/genre/tv/list';

export const imdbAdvanceSearch=(API_KEY,query)=>(`https://imdb-api.com/API/AdvancedSearch/${API_KEY}?${query}`);

const TMDB_API_KEY=process.env.REACT_APP_TMDB_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

export const imageBaseUrl='https://image.tmdb.org/t/p/w500';


export const originalUrl=API_BASE+'/discover/tv?with_network=213&language=en-US&api_key='+TMDB_API_KEY;
export const trendingUrl=API_BASE+'/trending/all/week?language=en-US&api_key='+TMDB_API_KEY;
export const recommendedUrl=API_BASE+'/movie/top_rated?language=en-US&api_key='+TMDB_API_KEY;
export const actionAdventureUrl=API_BASE+'/discover/movie?with_genres=28&language=en-US&api_key='+TMDB_API_KEY;
export const comedyUrl=API_BASE+'/discover/movie?with_genres=35&language=en-US&api_key='+TMDB_API_KEY;
export const romanceUrl=API_BASE+'/discover/movie?with_genres=10749&language=en-US&api_key='+TMDB_API_KEY;
export const documentryUrl=API_BASE+'/discover/movie?with_genres=99&language=en-US&api_key='+TMDB_API_KEY;


// tv/popular?language=en-US&page=2&api_key=
export const movieListUrl=(page)=>(API_BASE+`/movie/popular?language=en-US&page=${page}&api_key=`+TMDB_API_KEY);
export const tvShowUrl=(page)=>(API_BASE+`/tv/popular?language=en-US&page=${page}&api_key=`+TMDB_API_KEY);
export const seriesUrl=(page)=>(API_BASE+`/trending/tv/week?language=en-US&page=${page}&api_key=`+TMDB_API_KEY);
// https://api.themoviedb.org/3/movie/772071?language=en-US&api_key=7e71115b680b98bae83aa5b519d687cd

export const singleDataUrl=(type,id)=>(API_BASE+`/${type}/${id}?language=en-US&api_key=`+TMDB_API_KEY);


