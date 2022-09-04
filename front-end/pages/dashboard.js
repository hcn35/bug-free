import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import LineChart from "../components/LineChart";
import DashboardCard from "../components/Card";
import dashboardStyles from "../styles/Dashboard.module.css";
import { BiDownArrowAlt } from "react-icons/bi";
import DoughnutChart from "../components/DoughnutChart";
import StackedBarChart from "../components/StackedBarChart";

const dashboard = () => {
  // Tickets (%), Time per Ticket, Progress, Feature
  const cardTitles = ["Completed Tasks", "Tasks by priority", "Tasks by month"];
  const lineData = {
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

  const doughnutData = {
    backgroundColor: ["#4ade80", "#facc15", "#9ca3af", "#f87171"],
    labels: ["Completed", "Progress", "Todo", "Overdue"],
    datasets: [
      {
        label: "My first doughnut",
        data: [300, 50, 100, 300],
        backgroundColor: ["#4ade80", "#facc15", "#9ca3af", "#f87171"],
        hoverOffset: 4,
      },
    ],
  };

  const progressOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 3,
      },
    },
    cutout: 100,
  };

  const featureOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ["Feature1", "Feature2", "Feature3", "Feature4", "Feature5"];

  const featureData = {
    labels,
    datasets: [
      {
        label: "Completed",
        data: [150, 20, 30, 60, 40],
        backgroundColor: "#4ade80",
      },
      {
        label: "Overdue",
        data: [50, 20, 30, 60, 40],
        backgroundColor: "#facc15",
      },
      {
        label: "Progress",
        data: [50, 20, 30, 60, 40],
        backgroundColor: "#9ca3af",
      },
      {
        label: "Todo",
        data: [50, 20, 30, 60, 40],
        backgroundColor: "#f87171",
      },
    ],
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
                    <div className={dashboardStyles.secondaryCardTitle}>
                      {cardTitle}
                    </div>
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
                    <LineChart data={lineData} options={smallCardOptions} />
                  </div>
                </div>
              </DashboardCard>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={7}>
            <DashboardCard options="mb-3 shadow w-100">
              <div className={dashboardStyles.mainCardTitle}>
                Feature Progress
              </div>
              <div>
                <StackedBarChart options={featureOptions} data={featureData} />
              </div>
            </DashboardCard>
          </Col>
          <Col mg={5}>
            <DashboardCard options="mb-3 shadow w-100">
              <div className={dashboardStyles.mainCardTitle}>
                Project Progress
              </div>
              <div className={dashboardStyles.progressChart}>
                <DoughnutChart data={doughnutData} options={progressOptions} />
              </div>
            </DashboardCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default dashboard;
