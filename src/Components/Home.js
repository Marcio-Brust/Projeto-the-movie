import React from "react";
import styles from "./Home.module.css";
import logo from "../img/shuffle-2.svg";
import poster from "../img/Poster-1.png";
import Head from "./Head";

const Home = () => {
  const [home, setHome] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleChange() {
    const numero = Math.floor(Math.random() * 2000);

    async function filmes(url) {
      try {
        setCarregando(true);
        const filmes = await fetch(url);
        const filmesJson = await filmes.json();
        setHome(filmesJson);
      } catch (erro) {
        setError("Um error");
      } finally {
        setCarregando(false);
      }
    }
    filmes(
      `https://api.themoviedb.org/3/movie/${numero}?api_key=9742a6bbce5f9349a4ee7079705102d6`
    );
  }

  if (carregando) return <div className={styles.carregando}></div>;
  if (home === null)
    return (
      <button className={styles.button} onClick={handleChange}>
        <img src={logo} alt="logo" /> Encontrar filme
      </button>
    );
  if (home.poster_path === undefined)
    return (
      <>
        <div className={styles.erro}>
          <div>
            <img src={poster} alt="poster" />
          </div>
          <div>
            <h1 className={styles.fraseCode}>
              Ops, hoje não é dia de assistir filme. Bora <br></br> codar!🚀
            </h1>
            <h1 className={styles.h2}>Clique novamente para uma nova busca!</h1>
          </div>
        </div>
        <button className={styles.button} onClick={handleChange}>
          <img src={logo} alt="logo" /> Encontrar filme
        </button>
      </>
    );
  const img = `https://image.tmdb.org/t/p/w500/${home.poster_path}`;
  return (
    <section className={styles.section}>
      <Head title={`${home.title}`} />
      <div className={styles.home}>
        <div>
          {<img className={styles.img} src={img} alt="imagem do filme" />}
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>{home.title}</h1>
          <p className={styles.p}>{home.overview}</p>
        </div>
      </div>
      <button className={styles.button} onClick={handleChange}>
        <img src={logo} alt="logo" /> Encontrar filme
      </button>
    </section>
  );
};

export default Home;
