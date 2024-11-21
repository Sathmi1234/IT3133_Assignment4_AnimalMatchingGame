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
      <h1><span className='component-border'>Animal Matching Game </span></h1><br/>
      <Container>
        <Row>
          <Col xs={3}><div className='component-border'><Result/></div></Col>
          <Col xs={3}><div className='component-border'><Name/></div></Col>
          <Col><div className='component-border'><Select/></div></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
