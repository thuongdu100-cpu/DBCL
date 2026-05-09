import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";
import { useAuth } from "../../../auth/AuthContext";
import hasPermission from "../../../auth/hasPermission";

export default function Sidebar() {

  const { user } = useAuth();

  const filteredRoutes = routes.filter(r =>
    hasPermission(user.role, r.permission)
  );

  return (
    <div className="sidebar">

      <div className="sidebar-title">
        ĐBCL SYSTEM
      </div>

      <div className="sidebar-nav">

        {filteredRoutes.map(r => (
          <NavLink
            key={r.path}
            to={`/dbcl/${r.path}`}
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