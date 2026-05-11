import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";

import { useAuth } from "../../../auth/AuthContext";
import hasPermission from "../../../auth/hasPermission";

export default function Sidebar() {

  const { user } = useAuth();

  // =========================
  // FILTER ROUTES
  // =========================

  const filteredRoutes = routes.filter(r => {

    // hidden khỏi sidebar
    if (r.sidebar === false) {
      return false;
    }

    // check permission
    return hasPermission(
      user.role,
      r.permission
    );
  });

  return (
    <div className="sidebar">

      {/* =========================
          LOGO
      ========================= */}
      <div className="sidebar-title">
        Hệ Thống ĐBCL
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <div className="sidebar-nav">

        {filteredRoutes.map(r => (

          <NavLink
            key={r.path}
            to={`/dbcl/${r.path}`}
            className={({ isActive }) =>
              "sidebar-link" +
              (isActive ? " active" : "")
            }
          >
            {r.label}
          </NavLink>

        ))}

      </div>

    </div>
  );
}