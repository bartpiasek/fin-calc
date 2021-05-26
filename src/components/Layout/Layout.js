import React from "react";
import Calc from "../Calc/Calc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <Calc />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Layout;
