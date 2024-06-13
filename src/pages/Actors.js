import NavBar from "../components/NavBar";

function Actors() {
  const actors = [
    { name: "Actor 1", movies: ["Movie A", "Movie B"] },
    { name: "Actor 2", movies: ["Movie C", "Movie D"] }
  ];

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
