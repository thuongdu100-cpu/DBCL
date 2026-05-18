import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DBCLLayout from "../layouts/DBCLLayout";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../features/auth/LoginPage";

import { routes } from "./route.config.jsx";

/* =========================================================
   ROUTE RENDER
========================================================= */

function renderRoutes(routeList) {

  return routeList.map((r) => {

    const Element = r.element;

    const routeElement = Element ? (
      <ProtectedRoute permission={r.permission}>
        <Element />
      </ProtectedRoute>
    ) : undefined;

    return (
      <Route
        key={r.path || "index"}
        path={r.path}
        index={r.index}
        element={routeElement}
      >
        {r.children && renderRoutes(r.children)}
      </Route>
    );
  });
}
  const BASENAME =
  import.meta.env.PROD ? "/dbcl" : "";
/* =========================================================
   APP ROUTER
========================================================= */


export default function AppRouter() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>

        <Route path="login" element={<LoginPage />} />

        <Route
          path=""
          element={
            <ProtectedRoute>
              <DBCLLayout />
            </ProtectedRoute>
          }
        >
          {/* DEFAULT REDIRECT */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* DYNAMIC ROUTES */}
          {renderRoutes(routes)}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}