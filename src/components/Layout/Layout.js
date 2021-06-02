import React from "react";
import Calc from "../Calc/Calc";
import NettoCashFlow from "../Financial/NettoCashFlow";
import StatFunc from "../Stat/StatFunc";
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
        <Col>
          <NettoCashFlow />
        </Col>
      </Row>
      <Row>
        <Col>
          <StatFunc />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
