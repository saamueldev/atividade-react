import { useState } from "react";
import { Link } from "react-router-dom";

function GameCard({ game, onFavorite }) {
  const [favorito, setFavorito] = useState(false);

  function toggleFavorito() {
    setFavorito(!favorito);
    onFavorite(game);
  }

  return (
    <div className="card h-100 position-relative" style={{ width: "18rem" }}>
      <Link to={`/detalhe/${game.id}`}>
        <img
          src={game.image}
          className="card-img-top"
          alt={game.title}
          style={{ cursor: "pointer" }}
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>

        <p className="card-text">
          {game.genre} - {game.year}
        </p>

        <div className="d-flex gap-2">
          <Link
            to={`/detalhe/${game.id}`}
            className="btn btn-outline-primary"
          >
            Detalhes
          </Link>

          <a
            href="https://www.ggmax.com.br/anuncio/jogos-do-momento-para-pc-contas-steam-offline-entrega-automatica"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Comprar
          </a>
        </div>
      </div>

      <button
        onClick={toggleFavorito}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "22px",
          cursor: "pointer"
        }}
      >
        {favorito ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default GameCard;