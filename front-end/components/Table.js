import Table from "react-bootstrap/Table";
import tableStyles from "../styles/Table.module.css";

function BasicTable({ tasks }) {
  return (
    <Table className={tableStyles.tableContainer}>
      <thead className={tableStyles.tableHeader}>
        <tr>
          <th>Project</th>
          <th>Task</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody className={tableStyles.tableBody}>
        {tasks.map((row) => (
          <tr>
            <td>{row.project}</td>
            <td>{row.task}</td>
            <td>{row.status}</td>
            <td>{row.priority}</td>
            <td>{row.due}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicTable;
