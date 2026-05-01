import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { games } from "../data/Games";

function Detalhe() {
  const { id } = useParams();

  const game = games.find((item) => item.id === Number(id));

  if (!game) {
    return <h2>Jogo não encontrado.</h2>;
  }

  return (
    <Card className="shadow-sm">
      <Card.Img
        variant="top"
        src={game.image}
        alt={game.title}
        style={{ maxHeight: "350px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{game.title}</Card.Title>

        <Card.Text>
          <strong>Gênero:</strong> {game.genre}
        </Card.Text>

        <Card.Text>
          <strong>Ano:</strong> {game.year}
        </Card.Text>

        <Card.Text>{game.description}</Card.Text>

        <Button as={Link} to="/" variant="primary">
          Voltar para jogos
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Detalhe;