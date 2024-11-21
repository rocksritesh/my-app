import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./footer";
import Body from "./body";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { blog } from "./Data/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faDashcube, faHackerNews } from "@fortawesome/free-brands-svg-icons";

function App() {
  // let headerInfo = {
  //   name: "ritesh",
  //   age: 23,
  //   school: "LFPS",
  // };
  return (
    <div className="App">
      {/* <Header headerInfo={headerInfo} cname="third eye">
        <h1>VS CODE third party app </h1>
      </Header> */}
      {/* <Container fluid>
        <Row>
          <Col>
            <h1>CARS</h1>
          </Col>
        </Row>
         
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Lamborgini</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>B.M.W</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Mercedes Benz</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <FontAwesomeIcon icon={faWalkieTalkie} />
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faDashcube} />
      <FontAwesomeIcon icon={faHackerNews} />
      <Container fluid>
        <Row>
          {blog.map((v, i) => {
            return <ProductItem pitems={v} />;
          })}
        </Row>
      </Container>

      {/* <Footer />
      <Body /> */}
    </div>
  );
}

export default App;

function ProductItem({ pitems }) {
  return (
    <div class="col lg=3 md=6">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{pitems.id}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
