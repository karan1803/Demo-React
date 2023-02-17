import React, { lazy } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const TableView = lazy(() => import('./TableView'));
const ChartView = lazy(() => import('./ChartView'));


function Home(){

    return (
        <Container fluid>
      <Row>
        <Col><TableView/></Col>
        <Col><ChartView/></Col>
      </Row>
    </Container>
    );
}

export default Home;