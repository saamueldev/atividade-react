import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";
import Detalhe from "./pages/Detalhe";

import { games } from "./data/Games";

function App() {
  const [filteredGames, setFilteredGames] = useState(games);
  const [favorites, setFavorites] = useState([]);

  function handleSearch(text) {
    const result = games.filter((game) =>
      game.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredGames(result);
  }

  function handleFavorite(game) {
    const exists = favorites.find((item) => item.id === game.id);

    if (!exists) {
      setFavorites([...favorites, game]);
    }
  }

  return (
    <BrowserRouter>
      <AppNavbar onSearch={handleSearch} />

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<Home games={filteredGames} onFavorite={handleFavorite} />}
          />

          <Route
            path="/detalhe/:id"
            element={<Detalhe />}
          />

          <Route
            path="/extra"
            element={<Favoritos favoritos={favorites} />}
          />

          <Route
            path="/sobre"
            element={<Sobre />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;