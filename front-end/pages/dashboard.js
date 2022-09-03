import Header from "../components/Header";
import BasicTable from "../components/Table";
import { Container, Row, Col, Card } from "react-bootstrap";
import LineChart from "../components/LineChart";
import DashboardCard from "../components/Card";
import dashboardStyles from "../styles/Dashboard.module.css";
import { BiDownArrowAlt } from "react-icons/bi";

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
              <DashboardCard options="mb-3 shadow w-100">
                <div className={dashboardStyles.cardContainer}>
                  <div>
                    <div className={dashboardStyles.cardTitle}>{cardTitle}</div>
                    <div className={dashboardStyles.taskCount}>130</div>
                    <div className={dashboardStyles.comparison}>
                      <div className={dashboardStyles.percent}>1.3%</div>
                      <div className={dashboardStyles.directionIcon}>
                        <BiDownArrowAlt />
                      </div>
                      <div className={dashboardStyles.cardText}>
                        than last month
                      </div>
                    </div>
                  </div>
                  <div className={dashboardStyles.cardChart}>
                    <LineChart data={data} options={smallCardOptions} />
                  </div>
                </div>
              </DashboardCard>
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
