import Header from "../components/Header";
import dashboardStyles from "../styles/Dashboard.module.css";
import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import DashboardCard from "../components/Card";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import administrationStyles from "../styles/Administration.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modify Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Project"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Project"
                  defaultValue="New Project"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Task Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Task Name"
                  defaultValue="New Task"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Status"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  {["To Do", "In Progress", "Done", "Overdue"].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Priority"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  {["Low", "Medium", "High"].map((priority) => (
                    <option key={priority} value={priority}>
                      {priority}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Due"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  placeholder="Due"
                  // defaultValue="New Task"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CreateTaskModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Project"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Project"
                  defaultValue="New Project"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Task Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Task Name"
                  defaultValue="New Task"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Status"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  {["To Do", "In Progress", "Done", "Overdue"].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Priority"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  {["Low", "Medium", "High"].map((priority) => (
                    <option key={priority} value={priority}>
                      {priority}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Due"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  placeholder="Due"
                  // defaultValue="New Task"
                  // onChange={(e) => {}}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

const tasks = () => {
  const [modalShow, setModalShow] = useState(false);
  const [newTaskModalShow, setNewTaskModalShow] = useState(false);
  const [data, setData] = useState(0);

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setData(rowIndex);
      setModalShow(true);
    },
  };

  const headerSortingStyle = { backgroundColor: "#e9effd" };
  const columns = [
    {
      dataField: "project",
      text: "Project",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "task",
      text: "Task",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "due",
      text: "Due",
      sort: true,
      headerSortingStyle,
    },
  ];

  const products = [
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

  const options = {
    custom: true,
    totalSize: products.length,
  };

  const handleClick = () => setNewTaskModalShow(true);

  return (
    <>
      <div>
        <Header title="Administration"></Header>
        <Container>
          <Row>
            <Col mg={12}>
              <DashboardCard>
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <ToolkitProvider
                        keyField="id"
                        data={products}
                        columns={columns}
                        search
                      >
                        {(props) => {
                          console.log(props);
                          return (
                            <div>
                              <div className={administrationStyles.header}>
                                <div
                                  className={dashboardStyles.secondaryCardTitle}
                                >
                                  Tasks
                                </div>
                                <Button variant="primary" onClick={handleClick}>
                                  <div
                                    className={dashboardStyles.newTaskContent}
                                  >
                                    <FaPlus /> <div>New Task</div>
                                  </div>
                                </Button>
                              </div>
                              <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                condensed
                                noDataIndication="Table is Empty"
                                rowEvents={rowEvents}
                                {...paginationTableProps}
                                classes={dashboardStyles.tableHover}
                              />
                            </div>
                          );
                        }}
                      </ToolkitProvider>
                      <div className={administrationStyles.pagination}>
                        <PaginationTotalStandalone {...paginationProps} />
                        <PaginationListStandalone {...paginationProps} />
                      </div>
                    </div>
                  )}
                </PaginationProvider>
              </DashboardCard>
            </Col>
          </Row>
        </Container>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
      <CreateTaskModal
        show={newTaskModalShow}
        onHide={() => setNewTaskModalShow(false)}
        data={data}
      />
    </>
  );
};

export default tasks;
