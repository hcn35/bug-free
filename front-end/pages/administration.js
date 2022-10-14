import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import DashboardCard from "../components/Card";
import { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import UserEditor from "../components/UserEditor";
import UserTable from "../components/UserTable";

const administration = ({ data }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const users = data.data.users;
    const newUsers = users.map((user) => ({
      id: user.email.slice(0, user.email.indexOf("@")),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      phone: user.phone,
    }));
    setUserData(newUsers);
  }, [data]);

  const [userEditorData, setUserEditorData] = useState({});

  function currentUserChanger(newUser) {
    setUserEditorData(newUser);
  }

  return (
    <div>
      <Header title="Administration"></Header>
      <Container>
        <Row>
          <Col mg={6}>
            <DashboardCard>
              <UserTable
                userData={userData}
                currentUserChanger={currentUserChanger}
              />
            </DashboardCard>
          </Col>
          <Col mg={6}>
            <DashboardCard>
              <UserEditor props={userEditorData} />
            </DashboardCard>
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
