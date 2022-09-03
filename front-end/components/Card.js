import Card from "react-bootstrap/Card";

function DashboardCard({ children, options }) {
  return (
    <Card className={options}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default DashboardCard;
