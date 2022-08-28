import Image from "next/image";
import myPhoto from "../photos/me.JPG";
import {
  BiLogOut,
  BiBug,
  BiTask,
  BiGroup,
  BiBarChartAlt2,
} from "react-icons/bi";
import sidebarStyles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <a href="#" className={sidebarStyles.logo}>
        <BiBug className={sidebarStyles.logoIcon} />
        <div className={sidebarStyles.logoName}>BugFree</div>
      </a>
      <ul className={sidebarStyles.navList}>
        <li>
          <a href="/dashboard">
            <BiBarChartAlt2 className={sidebarStyles.navListIcon} />
            <span className={sidebarStyles.pageName}>Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/tasks">
            <BiTask className={sidebarStyles.navListIcon} />
            <span className={sidebarStyles.pageName}>Tasks</span>
          </a>
        </li>

        <li>
          <a href="/administration">
            <BiGroup className={sidebarStyles.navListIcon} />
            <span className={sidebarStyles.pageName}>Administration</span>
          </a>
        </li>
      </ul>
      <div className={sidebarStyles.profileContent}>
        <div className={sidebarStyles.profileContentDetails}>
          <Image
            className={sidebarStyles.profileImage}
            src={myPhoto}
            alt="photo"
            width="45px"
            height="45px"
          />
          <div className={sidebarStyles.nameJob}>
            <div className={sidebarStyles.name}>Hiep Nguyen</div>
            <div className={sidebarStyles.job}>Software Engineer</div>
          </div>
        </div>
        <BiLogOut className={sidebarStyles.logoutIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
