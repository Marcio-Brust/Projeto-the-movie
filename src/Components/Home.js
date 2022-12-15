import React from "react";
import styles from "./Home.module.css";
import logo from "../img/shuffle-2.svg";

const Home = () => {
  const [home, setHome] = React.useState("");

  function handleChange() {
    const numero = Math.floor(Math.random() * 1000);

    async function filmes() {
      const movies = await fetch(
        `https://api.themoviedb.org/3/movie/${numero}?api_key=9742a6bbce5f9349a4ee7079705102d6`
      );
      const moviesJson = await movies.json();
      setHome(moviesJson);
    }
    filmes();
  }

  const img = `https://image.tmdb.org/t/p/w500/${home.poster_path}`;
  return (
    <section className={styles.section}>
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
