import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from './components/Result';
import Name from './components/Name';
import Select from './components/Select';
import { animals } from './assets/data/AnimalsDb';
import { useState } from 'react';

function App() {
  const [currentAnimal, setCurrentAnimal]=useState(
    animals[Math.floor(Math.random()* animals.length)]
  )

  return (
    <div className="App">
      <br/>
      <h1><span className='component-border'>Animal Matching Game </span></h1><br/>
      <Container>
        <Row>
          <Col xs={3}><div className='component-border'><Result/></div></Col>
          <Col xs={3}><div className='component-border'><Name name={currentAnimal.name}/></div></Col>
          <Col><div className='component-border'><Select animals={animals}/></div></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
