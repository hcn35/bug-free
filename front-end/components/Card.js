import Card from "react-bootstrap/Card";

function DashboardCard(props) {
  return (
    <Card className="text-left">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>Charts</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DashboardCard;
