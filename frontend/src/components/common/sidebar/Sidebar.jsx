import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";

import { useAuth } from "../../../auth/AuthContext";
import hasPermission from "../../../auth/hasPermission";

export default function Sidebar() {

  const { user } = useAuth();

  const filteredRoutes = routes.filter(r => {

    if (r.sidebar === false) return false;

    return hasPermission(user.role, r.permission);
  });

  return (
    <div className="sidebar">

      <div className="sidebar-title">
        Hệ Thống ĐBCL
      </div>

      <div className="sidebar-nav">

        {filteredRoutes.map(r => (

          <NavLink
            key={r.path}
            to={r.path}  
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            {r.label}
          </NavLink>

        ))}

      </div>

    </div>
  );
}