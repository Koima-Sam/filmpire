import { useEffect, useState } from "react";
import Search from './search.svg'
import "./App.css";
import MovieCard from "./MovieCard";
const apiUrl = 'https://www.omdbapi.com/?apikey=b6003d8a&s=Meg';

// Then, use `apiUrl` in your fetch or XMLHttpRequest request


function App() {
  const [movies,setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  // 2cedc0e5
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  // Fetch the movie items
  useEffect(() => {
    searchMovies("Meg");
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input type="text" 
        placeholder="Search for Movies" 
        value={searchTerm} 
        onChange={(e) =>{setSearchTerm(e.target.value)}}
        />
        <img src={Search} alt="search icon" 
        onClick={()=> searchMovies(searchTerm)}
        
        />
      </div>
      {/* Movies list  and handle searches that are empty*/}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
    </div>
  );
}

export default App;
