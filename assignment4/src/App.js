import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from './components/Result';
import Name from './components/Name';
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <br/>
      <h1>Animal Matching Game</h1>
      <Container>
        <Row>
          <Col><Result/></Col>
          <Col><Name/></Col>
          <Col><Select/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
