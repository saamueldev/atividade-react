import { useEffect } from "react";
import GameList from "../components/GameList";

function Home({ games, onFavorite }) {
  useEffect(() => {
    document.title = "Sorvete Story | Jogos";
  }, []);

  return (
    <div>
      <h1 className="mb-3">Lista de Jogos</h1>

      <p>
        Escolha um jogo para ver os detalhes, comprar ou adicionar aos favoritos.
      </p>

      <GameList games={games} onFavorite={onFavorite} />
    </div>
  );
}

export default Home;