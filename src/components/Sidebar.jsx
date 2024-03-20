import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DiYii } from "react-icons/di";
import { IoPerson } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <DiYii className="icon" /> Dashboard{" "}
          <span style={{ fontSize: "8px", color: "#666666" }}>v.01</span>
        </div>
        <span className="icon close-icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <MdDashboard className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineProductionQuantityLimits className="icon" />
            Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoPerson className="icon" />
            Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaWallet className="icon" />
            Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <GiProgression className="icon" />
            Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoMdHelp className="icon" />
            Help
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
