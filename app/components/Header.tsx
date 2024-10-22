// app/components/Header.tsx

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Meu Encurtador de URL</h1>
      <nav>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/about" style={styles.link}>
          Sobre
        </a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#0070f3",
    color: "white",
    textAlign: "center" as const,
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold" as const,
  },
};
