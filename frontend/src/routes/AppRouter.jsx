import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DBCLLayout from "../layouts/DBCLLayout";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../features/auth/LoginPage";

import { routes } from "./route.config";

export default function AppRouter() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={<Navigate to="/dbcl/dashboard" replace />}
        />

        <Route
          path="/dbcl"
          element={
            <ProtectedRoute>
              <DBCLLayout />
            </ProtectedRoute>
          }
        >

          {routes.map(r => {
            const Element = r.element;

            return (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <ProtectedRoute permission={r.permission}>
                    <Element />
                  </ProtectedRoute>
                }
              />
            );
          })}

        </Route>

      </Routes>

    </BrowserRouter>
  );
}