import Table from "react-bootstrap/Table";
import tableStyles from "../styles/Table.module.css";

function BasicTable() {
  return (
    <Table className={tableStyles.tableContainer}>
      <thead>
        <tr>
          <th>Project</th>
          <th>Task</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bug Tracker</td>
          <td>Create Schema</td>
          <td>Resolved</td>
          <td>High</td>
          <td>10 days ago</td>
        </tr>
        <tr>
          <td>Bug Tracker</td>
          <td>Create Schema</td>
          <td>Resolved</td>
          <td>High</td>
          <td>10 days ago</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicTable;
