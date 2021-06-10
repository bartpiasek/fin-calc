import React from "react";
import Calc from "../Calc/Calc";
import NettoCashFlow from "../Financial/NettoCashFlow";
import StatFunc from "../Stat/StatFunc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PresentValue from "../Financial/PresentValue";
import FutureValue from "../Financial/FutureValue";

function Layout() {
  return (
    <Container>
      <Row>
        <Col></Col>
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
      <Row>
        <Col>
          <PresentValue />
        </Col>
      </Row>
      <Row>
        <Col>
          <FutureValue />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
