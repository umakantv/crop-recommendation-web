import CropPrediction from "./CropPrediction";
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function  MainContainer({children}) {
  return <Container>
    <Row>
      <Col xs={12} sm={12} md={10} lg={8} xl={6}>
        {children}
      </Col>
    </Row>
  </Container>
}

function App() {
  return (
    <div className="App">
      <MainContainer>
        <header className="App-header">
          <h1>Kisaan - A Smart Farming App</h1>
        </header>
      </MainContainer>
      <MainContainer>
        <CropPrediction />
      </MainContainer>
    </div>
  );
}

export default App;
