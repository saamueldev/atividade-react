import { Row, Col } from "react-bootstrap";
import GameCard from "./GameCard";


function GameList({ games, onFavorite }) {
  return (
    <Row>
      {games.map((game) => (
        <Col md={4} className="mb-4" key={game.id}>
          <GameCard
            game={game}
            onFavorite={onFavorite}
          />
        </Col>
      ))}
    </Row>
  );
}

export default GameList;