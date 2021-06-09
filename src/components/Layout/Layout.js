import React from "react";
import Calc from "../Calc/Calc";
import NettoCashFlow from "../Financial/NettoCashFlow";
import StatFunc from "../Stat/StatFunc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Investments from "../Financial/Investments";

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
          <Investments />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
