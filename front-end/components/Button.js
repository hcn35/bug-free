import React from "react";
import { Button } from "react-bootstrap";
import buttonStyles from "../styles/Button.module.css";

const BasicButton = (props) => {
  return <Button className={buttonStyles.btn}>{props.children}</Button>;
};

export default BasicButton;
