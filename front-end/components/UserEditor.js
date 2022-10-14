import React, { useEffect, useState } from "react";
import administrationStyles from "../styles/Administration.module.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const UserEditor = ({ props }) => {
  return Object.keys(props).length ? (
    <div key={props.firstName}>
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
                defaultValue={props.firstName}
                // onChange={(e) => {}}
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
                defaultValue={props.lastName}
                // onChange={(e) => {}}
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
                defaultValue={props.phone}
                // onChange={(e) => {}}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Role"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example" className="mb-3">
                <option key={props.role} value={props.role}>
                  {props.role}
                </option>
                {["Lead Developer", "Developer"]
                  .filter((role) => role !== props.role)
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
                defaultValue={props.email}
                // onChange={(e) => {}}
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
    </div>
  ) : (
    <>
      <div className={administrationStyles.editUserInformation}>
        Edit User Information
      </div>
      <div>No user is selected!</div>
    </>
  );
};

export default UserEditor;
