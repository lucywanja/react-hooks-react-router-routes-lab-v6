import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const[movies, setMovies] = useState([]);


  useEffect(() => {

    fetch("http://localhost:4000/movies")
    .then((r) => r.json())
    .then (data =>  setMovies([
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" }
    ]));
  }, []);
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <MovieCard key ={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
};

export default Home;
