import Header from "../components/Header";

import { Container, Row } from "react-bootstrap";
import BasicTable from "../components/Table";
import taskStyles from "../styles/Task.module.css";
import BasicButton from "../components/Button";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const tasks = () => {
  const fakeData = [
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker",
      task: "Create Schema",
      status: "Resolved",
      priority: "High",
      due: "10 days ago",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker1",
      task: "Create Schema1",
      status: "Resolved1",
      priority: "High1",
      due: "10 days ago1",
    },
    {
      project: "Bug Tracker2",
      task: "Create Schema2",
      status: "Resolved2",
      priority: "High2",
      due: "10 days ago2",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 13;
  const [displayedTasks, setDisplayedTasks] = useState(
    fakeData.slice(0, tasksPerPage)
  );

  useEffect(() => {
    setDisplayedTasks(
      fakeData.slice(
        (currentPage - 1) * tasksPerPage,
        currentPage * tasksPerPage - 1
      )
    );
  }, [currentPage]);

  return (
    <div>
      <Header title="Tasks"></Header>
      <div className={taskStyles.taskContainer}>
        <div className={taskStyles.taskTable}>
          <div className={taskStyles.tableHeader}>
            <p>Tasks</p>
            <BasicButton>Create Task</BasicButton>
          </div>
          <Container fluid>
            <Row g-0>
              <BasicTable tasks={displayedTasks}></BasicTable>
            </Row>
          </Container>
          <div className={taskStyles.paginationContainer}>
            <Pagination
              tasksPerPage={tasksPerPage}
              totalTasks={fakeData.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
