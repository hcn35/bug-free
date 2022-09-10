import Header from "../components/Header";

import { Container, Row, Col, Button } from "react-bootstrap";
import BasicTable from "../components/Table";
import taskStyles from "../styles/Task.module.css";

const tasks = () => {
  return (
    <div>
      <Header title="Tasks"></Header>
      <div className={taskStyles.taskContainer}>
        <div className={taskStyles.taskTable}>
          <div className={taskStyles.tableHeader}>
            <p>Tasks</p>
            <Button>Create Task</Button>
          </div>
          <Container fluid>
            <Row g-0>
              <BasicTable></BasicTable>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default tasks;
