import NavBar from "../components/NavBar";

function Directors() {
  const directors = [
    { name: "Director 1", movies: ["Movie A", "Movie B"] },
    { name: "Director 2", movies: ["Movie C", "Movie D"] }
  ];

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;



