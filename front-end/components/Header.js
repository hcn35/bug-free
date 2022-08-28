import headerStyles from "../styles/Header.module.css";
const Header = (props) => {
  return <div className={headerStyles.container}>{props.title}</div>;
};

export default Header;
