import React from "react";
import styles from "./Header.module.css";
import img from "../img/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      {<img src={img} alt="logo" />}
      <h1 className={styles.h1}>Não sabe o que assitir?</h1>
    </header>
  );
};

export default Header;
