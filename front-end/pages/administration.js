import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import dashboardStyles from "../styles/Dashboard.module.css";
import administrationStyles from "../styles/Administration.module.css";
import DashboardCard from "../components/Card";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useState } from "react";

const administration = () => {
  const { SearchBar } = Search;
  const [editUserCard, setEditUserCard] = useState(<div>EDIT</div>);

  const columns = [
    {
      dataField: "id",
      text: "User ID",
    },
    {
      dataField: "name",
      text: "User Name",
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
      setEditUserCard(<div>{rowIndex}</div>);
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
