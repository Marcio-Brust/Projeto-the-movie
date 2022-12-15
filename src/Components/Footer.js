import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div>
        <p className={styles.p}>
          Clique em "Encontrar filme" que traremos informações de algum filme
          para você assistir hoje.
        </p>
      </div>
    </section>
  );
};

export default Footer;
