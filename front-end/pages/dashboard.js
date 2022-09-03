import Header from "../components/Header";
import BasicTable from "../components/Table";
import { Container, Row, Col, Card } from "react-bootstrap";
import LineChart from "../components/LineChart";

const dashboard = () => {
  // Tickets (%), Time per Ticket, Progress, Feature
  const cardTitles = ["Completed Tasks", "Tasks by priority", "Tasks by month"];
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [65, 59, 80, 20, 60],
      },
    ],
  };
  const smallCardOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47, 97, 68, 1)",
        fill: "start",
        backgroundColor: "rgba(47, 97, 68, 0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: { display: false },
      yAxis: { display: false },
    },
  };
  return (
    <>
      <Header title={"Dashboard"}></Header>
      <Container>
        <Row>
          {cardTitles.map((cardTitle) => (
            <Col mg={4}>
              <Card className="mb-3 shadow w-100">
                <Card.Body>
                  <div className="cardContainer">
                    <div>
                      <div className="cardTitle">{cardTitle}</div>
                      <div className="taskCount">130</div>
                      <div className="comparison">
                        <div className="percent">1.3</div>
                        <div className="directionIcon"></div>
                        <div>than last month</div>
                      </div>
                    </div>
                    <div>
                      <LineChart data={data} options={smallCardOptions} />
                    </div>
                  </div>
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
