import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/sorvete_story.png";

function AppNavbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4 py-3 bg-primary-subtle">
      <div className="container-fluid">

        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-3">
          <img
            src={logo}
            alt="Sorvete Story"
            width="52"
            height="52"
            className="rounded-circle border border-2 border-primary"
          />

          <span className="fw-bold fs-4 text-dark">
            Sorvete Story
          </span>
        </NavLink>

        <div className="d-flex align-items-center gap-4 mx-auto">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link fw-bold text-primary border-bottom border-3 border-primary"
                : "nav-link fw-semibold text-dark"
            }
            to="/"
          >
            Jogos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link fw-bold text-primary border-bottom border-3 border-primary"
                : "nav-link fw-semibold text-dark"
            }
            to="/extra"
          >
            Favoritos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link fw-bold text-primary border-bottom border-3 border-primary"
                : "nav-link fw-semibold text-dark"
            }
            to="/sobre"
          >
            Sobre
          </NavLink>
        </div>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 rounded-3"
            type="search"
            placeholder="Buscar jogo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="btn btn-primary rounded-3 px-4" type="submit">
            Buscar
          </button>
        </form>

      </div>
    </nav>
  );
}

export default AppNavbar;