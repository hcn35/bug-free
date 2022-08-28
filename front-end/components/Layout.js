import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.rightSide}>
        <Header></Header>
        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
