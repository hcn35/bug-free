import React from "react";
import dashboardStyles from "../styles/Dashboard.module.css";
import administrationStyles from "../styles/Administration.module.css";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

const UserTable = ({ userData, currentUserChanger }) => {
  const headerSortingStyle = { backgroundColor: "#e9effd" };
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
  const options = {
    custom: true,
    totalSize: userData.length,
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
          style={{ backgroundColor: "#e9effd" }}
        />
      </div>
    );
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => currentUserChanger(row),
  };

  return (
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
  );
};

export default UserTable;
