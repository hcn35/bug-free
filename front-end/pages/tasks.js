import Header from "../components/Header";
import dashboardStyles from "../styles/Dashboard.module.css";
import { Container, Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const tasks = () => {
  const [modalShow, setModalShow] = useState(false);
  const MySearch = (props) => {
    let input;
    const handleChange = () => {
      props.onSearch(input.value);
    };
    return (
      <div>
        <input
          className="form-control"
          ref={(n) => (input = n)}
          type="text"
          onChange={handleChange}
          placeholder="Search"
          style={{ backgroundColor: "#f1f5f9" }}
        />
      </div>
    );
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => setModalShow(true),
  };

  const headerSortingStyle = { backgroundColor: "#f1f5f9" };
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
                                <MySearch {...props.searchProps} />
                              </div>
                              <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                hover
                                condensed
                                noDataIndication="Table is Empty"
                                rowEvents={rowEvents}
                                {...paginationTableProps}
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
      />
    </>
  );
};

export default tasks;
