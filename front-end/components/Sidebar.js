import Image from "next/image";
import myPhoto from "../photos/me.JPG";
import {
  BiMenu,
  BiGridAlt,
  BiSearchAlt2,
  BiUser,
  BiMessageDetail,
  BiHeart,
  BiCog,
  BiLogOut,
  BiBug,
} from "react-icons/bi";
import sidebarStyles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.logoContent}>
        <div className={sidebarStyles.logo}>
          <BiBug className={sidebarStyles.logoIcon} />
          <div className={sidebarStyles.logoName}>BugFree</div>
        </div>
        <BiMenu className={sidebarStyles.sidebarMenu} />
      </div>
      <ul className={sidebarStyles.navList}>
        <li>
          <BiSearchAlt2 className={sidebarStyles.searchIcon} />
          <input
            className={sidebarStyles.searchInput}
            type="text"
            placeholder="Search..."
          ></input>
        </li>
        <li>
          <a href="#">
            <BiGridAlt className={sidebarStyles.navListIcon} />
            <span className="link-name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#">
            <BiUser className={sidebarStyles.navListIcon} />
            <span className="link-name">User</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BiMessageDetail className={sidebarStyles.navListIcon} />
            <span className="link-name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BiHeart className={sidebarStyles.navListIcon} />
            <span className="link-name">Saved</span>
          </a>
        </li>
        <li>
          <a href="/about">
            <BiCog className={sidebarStyles.navListIcon} />
            <span className="link-name">Settings</span>
          </a>
        </li>
      </ul>
      <div className={sidebarStyles.profileContent}>
        <div className={sidebarStyles.profile}>
          <div className={sidebarStyles.profileDetails}>
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
    </div>
  );
};

export default Sidebar;
