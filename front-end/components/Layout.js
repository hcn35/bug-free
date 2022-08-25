import styles from "../styles/Layout.module.css";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
