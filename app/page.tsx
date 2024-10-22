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
    <div>
      {/* <h1>Encurtador de URL</h1> */}
      <form onSubmit={handleSubmit}>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Insira a URL" required />
        <button type="submit">Encurtar</button>
      </form>
      {shortUrl && (
        <div>
          <p>
            URL encurtada: <a href={shortUrl}>{shortUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
}
