import Header from "../components/common/header/Header";
import Sidebar from "../components/common/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "../styles/main.css";

export default function DBCLLayout() {
  return (
    <div className="dbcl-layout">

      <Sidebar />

      <div className="dbcl-main">

        <Header />

        <div className="dbcl-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}