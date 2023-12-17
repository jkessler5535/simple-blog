import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const SleepChart = () => {
  const sleepData = [
    { stage: "Awake", duration: 1 },
    { stage: "REM", duration: 2 },
    { stage: "N1", duration: 1.5 },
    { stage: "N2", duration: 3 },
    { stage: "N3", duration: 2.5 },
  ];

  return (
    <Container>
      <h1>Sleep Chart</h1>
      {sleepData.map((data) => (
        <Row key={data.stage}>
          <Col sm={2}>{data.stage}</Col>
          <Col sm={10}>
          <ProgressBar now={(data.duration / 10) * 100} label={`${data.duration} hrs`} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SleepChart;