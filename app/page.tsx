"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setShortUrl(`${window.location.origin}/${data.short}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Encurtador de URL</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Insira a URL"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Encurtar
        </button>
      </form>
      {shortUrl && (
        <div style={styles.result}>
          <p>
            URL encurtada:{" "}
            <a href={shortUrl} style={styles.link}>
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Altura total da viewport
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  title: {
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "10px", // Espaço entre os inputs e botão
  },
  input: {
    padding: "10px",
    width: "300px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#005bb5",
  },
  result: {
    marginTop: "20px",
    fontSize: "1rem",
  },
  link: {
    color: "#0070f3",
  },
};
