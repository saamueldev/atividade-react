import { Card, Row, Col } from "react-bootstrap";

function Favoritos({ favoritos }) {
  return (
    <div>
      <h1 className="mb-3">Jogos Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>Nenhum jogo favoritado ainda.</p>
      ) : (
        <Row>
          {favoritos.map((game) => (
            <Col md={4} className="mb-4" key={game.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={game.image} />

                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>

                  <Card.Text>
                    {game.genre} - {game.year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Favoritos;