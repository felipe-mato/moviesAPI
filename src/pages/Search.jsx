import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParam] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParam.get('q');

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    setMovies(data.results)
  };

  useEffect(() => {
    const searchQuery = `${searchURL}?${apiKey}&query=${query}`
    
    getSearchMovies(searchQuery)
  }, [query])

return (
 <div className="container">
  <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
  <div className="movies-container">
    {movies.length === 0 && <p>Carregando...</p>}
    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
  </div>
</div>
)
}

export default Search