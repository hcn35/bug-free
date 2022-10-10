import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import dashboardStyles from "../styles/Dashboard.module.css";
import administrationStyles from "../styles/Administration.module.css";
import DashboardCard from "../components/Card";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const administration = () => {
  const { SearchBar } = Search;
  const [editUserCard, setEditUserCard] = useState(
    <>
      <div className={administrationStyles.editUserInformation}>
        Edit User Information
      </div>
      <div>No user selected</div>
    </>
  );
  const headerSortingStyle = { backgroundColor: "#f1f5f9" };
  const columns = [
    {
      dataField: "id",
      text: "User ID",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "name",
      text: "User Name",
      sort: true,
      headerSortingStyle,
    },
  ];

  const products = [
    { id: 1, name: "George" },
    { id: 2, name: "Jeffrey" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Alice" },
  ];

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
  };

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
    onClick: (e, row, rowIndex) => {
      const userForm = (
        <>
          <div className={administrationStyles.editUserInformation}>
            Edit User Information
          </div>
          <Form>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="First name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="First name" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Last name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Last name" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone number"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Phone number" />
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Select authorization role</option>
                  <option value="developer">Developer</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
              </Col>
            </Row>
            <div
              className={administrationStyles.buttonGroup}
              aria-label="Basic example"
            >
              <Button variant="primary">Submit</Button>{" "}
              <Button variant="danger">Delete user</Button>
            </div>
          </Form>
        </>
      );
      setEditUserCard(userForm);
    },
  };

  return (
    <div>
      <Header title="Administration"></Header>
      <Container>
        <Row>
          <Col mg={6}>
            <DashboardCard>
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
                        <div className={dashboardStyles.secondaryCardTitle}>
                          Users
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
                      />
                    </div>
                  );
                }}
              </ToolkitProvider>
            </DashboardCard>
          </Col>
          <Col mg={6}>
            <DashboardCard>{editUserCard}</DashboardCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default administration;
