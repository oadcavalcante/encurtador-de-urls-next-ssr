"use client";
import { useState } from "react";

export default function URLForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl, customSlug }),
    });

    const data = await res.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="original_url">URL</label>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fas fa-link"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="original_url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="http://www.exemplo.com"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="custom_slug">Fragmento Personalizado (opcional)</label>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fas fa-globe"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="custom_slug"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            placeholder="opcional (entre 3 e 64 caracteres)"
          />
        </div>
      </div>
      <div className="buttons form-group mt-3 text-center mb-3">
        <button type="submit" className="btn btn-primary btn-block">
          GERAR LINK
        </button>
      </div>
      {shortUrl && (
        <div className="alert alert-success text-center">
          URL encurtada: <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </form>
  );
}
