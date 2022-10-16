import React ,{useState, useEffect} from "react";
import MovieList from '../components/Movielist'
import MovieDetail from "../components/MovieDetail";
import '../App.css';
import MovieSelector from "../components/MovieSelect";



const MovieContainer = () => {

    const[movies, setMovies] = useState([])
    const[selectedMovie, setSelectedMovie] = useState(null)
    const[favMovie, setFavMovie] = useState([])

    useEffect(() => {
      getMovies()
    }, [])

    const getMovies = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(movies => setMovies(movies))
      
    }

    // const onMovieSelected = function (movie){
    //     setSelectedMovie(movie)
    // }
  return(
    <div>
    <MovieList className="container" movies={movies}/>
   <p></p>
    </div>
    )







}
export default MovieContainer