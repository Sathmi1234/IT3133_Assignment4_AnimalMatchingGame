import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Select({ animals,selection }) {
  return (
    <Container>
      <h2>Select the Animal</h2><br/>
      <Row className="gy-3" style={{ backgroundColor:"#15a6ca"}}>
        {   
            animals.map((animal) => (
                <Col xs={6} md={3} className="text-center">
                    <Button variant="outline-warning" className="p-2"
                            onClick={()=>selection(animal.name)}>
                        <img
                            src={require(`../assets/fig/${animal.img}`)}
                            alt={animal.name}
                            style={{ width: "100px", height: "100px", border:"black"}}
                        />
                    </Button>
                </Col>
            ))
        }
      </Row>
    </Container>
  );
}
