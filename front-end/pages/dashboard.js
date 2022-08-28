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
          {cardTitles.map((cardTitle) => (
            <Col mg={4}>
              <Card className="mb-3 shadow w-100">
                <Card.Header>{cardTitle}</Card.Header>
                <Card.Body>
                  {/* <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                  </Card.Text> */}
                  <div>HELLO</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
