import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        Desenvolvido pelo Centro de Computação da Aeronáutica de Brasília - CCA-BR
      </span>
    </footer>
  );
}
