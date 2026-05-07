import { NavLink } from "react-router-dom";
import { sidebarMenu } from "./sidebar.menu";
import "../../../styles/main.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">ĐBCL</div>

      <nav className="sidebar-nav">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}