import Header from "../components/Header";
import DashboardCard from "../components/Card";
import BasicTable from "../components/Table";
import { Container, Row, Col, Card } from "react-bootstrap";

const dashboard = () => {
  const cardTitles = ["Tasks by status", "Tasks by priority", "Tasks by month"];
  return (
    <>
      <Header title={"Dashboard"}></Header>
      <Container>
        <Row>
          <Col mg={4}>
            <Card className="mb-3 my-3 shadow w-100">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col mg={4}>
            <Card className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col mg={4}>
            <Card className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col md={12}>
          <BasicTable></BasicTable>
        </Col>
      </Container>
    </>
  );
};

export default dashboard;
