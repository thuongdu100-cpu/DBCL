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

/* =========================================================
   APP ROUTER
========================================================= */

export default function AppRouter() {

  return (

    <BrowserRouter basename="/dbcl">

      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* ROOT */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* MAIN APP */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DBCLLayout />
            </ProtectedRoute>
          }
        >
          {renderRoutes(routes)}
        </Route>

      </Routes>

    </BrowserRouter>
  );
}