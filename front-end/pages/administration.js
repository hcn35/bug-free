import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import dashboardStyles from "../styles/Dashboard.module.css";
import administrationStyles from "../styles/Administration.module.css";
import DashboardCard from "../components/Card";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";

const administration = ({ data }) => {
  console.log(data);
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
      dataField: "firstName",
      text: "First Name",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      headerSortingStyle,
    },
  ];

  const products = [
    { id: 1, name: "George" },
    { id: 2, name: "Jeffrey" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Alice" },
    { id: 5, name: "George" },
    { id: 6, name: "Jeffrey" },
    { id: 7, name: "Alice" },
    { id: 8, name: "Alice" },
    { id: 9, name: "George" },
    { id: 10, name: "Jeffrey" },
    { id: 11, name: "Alice" },
    { id: 12, name: "Alice" },
    { id: 13, name: "George" },
    { id: 14, name: "Jeffrey" },
    { id: 15, name: "Alice" },
    { id: 16, name: "Alice" },
    { id: 17, name: "George" },
    { id: 18, name: "Jeffrey" },
    { id: 19, name: "Alice" },
    { id: 20, name: "Alice" },
    { id: 21, name: "George" },
    { id: 22, name: "Jeffrey" },
    { id: 23, name: "Alice" },
    { id: 24, name: "Alice" },
    { id: 25, name: "George" },
    { id: 26, name: "Jeffrey" },
    { id: 27, name: "Alice" },
    { id: 28, name: "Alice" },
    { id: 29, name: "George" },
    { id: 30, name: "Jeffrey" },
    { id: 31, name: "Alice" },
    { id: 32, name: "Alice" },
    { id: 33, name: "George" },
    { id: 34, name: "Jeffrey" },
    { id: 35, name: "Alice" },
    { id: 36, name: "Alice" },
    { id: 37, name: "George" },
    { id: 38, name: "Jeffrey" },
    { id: 39, name: "Alice" },
    { id: 40, name: "Alice" },
    { id: 41, name: "George" },
    { id: 42, name: "Jeffrey" },
    { id: 43, name: "Alice" },
    { id: 44, name: "Alice" },
    { id: 45, name: "George" },
    { id: 46, name: "Jeffrey" },
    { id: 47, name: "Alice" },
    { id: 48, name: "Alice" },
    { id: 49, name: "George" },
    { id: 50, name: "Jeffrey" },
    { id: 51, name: "Alice" },
    { id: 52, name: "Alice" },
    { id: 53, name: "George" },
    { id: 54, name: "Jeffrey" },
    { id: 55, name: "Alice" },
    { id: 56, name: "Alice" },
    { id: 57, name: "George" },
    { id: 58, name: "Jeffrey" },
    { id: 59, name: "Alice" },
    { id: 60, name: "Alice" },
    { id: 61, name: "George" },
    { id: 62, name: "Jeffrey" },
    { id: 63, name: "Alice" },
    { id: 64, name: "Alice" },
  ];

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const users = data.data.users;
    const newUsers = users.map((user) => ({
      id: user.email.slice(0, user.email.indexOf("@")),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    }));
    setUserData(newUsers);
  }, [data]);

  const options = {
    custom: true,
    totalSize: userData.length,
  };

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
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    defaultValue={row.firstName}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Last name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    defaultValue={row.lastName}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
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
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Role"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                  >
                    <option key={row.role} value={row.role}>
                      {row.role}
                    </option>
                    {["Lead Developer", "Developer"]
                      .filter((role) => role !== row.role)
                      .map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    defaultValue={row.email}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
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
              <PaginationProvider pagination={paginationFactory(options)}>
                {({ paginationProps, paginationTableProps }) => (
                  <div>
                    <ToolkitProvider
                      keyField="id"
                      data={userData}
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
          <Col mg={6}>
            <DashboardCard>{editUserCard}</DashboardCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8530/api/v1/users");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default administration;
