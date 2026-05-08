import { NavLink } from "react-router-dom";

import { sidebarMenu } from "./sidebar.menu";

import { useAuth } from "../../../auth/AuthContext";
import hasPermission from "../../../auth/hasPermission";

export default function Sidebar() {

  const { user } = useAuth();

  const filteredMenus = sidebarMenu.filter((item) =>
    hasPermission(user.role, item.permission)
  );

  if (!user) {
    return null;
  }
  return (
    <aside className="sidebar">

      <h2 className="sidebar-title">
        Hệ thống ĐBCL
      </h2>

      <nav className="sidebar-nav">

        {filteredMenus.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {item.label}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}