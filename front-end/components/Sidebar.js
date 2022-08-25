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
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <BiBug />
          <div className="logo-name">Bug Free</div>
        </div>
        <BiMenu />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <>
              <BiGridAlt />
              <span className="link-name">Dashboard</span>
            </>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <BiSearchAlt2 />
          <input type="text" placeholder="Search..."></input>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <>
              <BiUser />
              <span className="link-name">User</span>
            </>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <>
              <BiMessageDetail />
              <span className="link-name">Messages</span>
            </>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <>
              <BiHeart />
              <span className="link-name">Saved</span>
            </>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/about">
            <>
              <BiCog />
              <span className="link-name">Settings</span>
            </>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
            {/* <img src="" alt="" /> */}
            <div className="name-job">
              <div className="name">Hiep Nguyen</div>
              <div className="job">Software Engineer</div>
            </div>
          </div>
          <div className="logout">
            <BiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
