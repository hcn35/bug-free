import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
