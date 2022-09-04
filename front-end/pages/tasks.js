import Header from "../components/Header";

import { Container, Row, Col, Card } from "react-bootstrap";
import BasicTable from "../components/Table";

const tasks = () => {
  return (
    <div>
      <Header title="Tasks"></Header>
      <Container>
        <Col md={12}>
          <BasicTable></BasicTable>
        </Col>
      </Container>
    </div>
  );
};

export default tasks;
