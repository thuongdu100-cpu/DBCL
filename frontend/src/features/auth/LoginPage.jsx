import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import "../../styles/main.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = login(username, password);

    if (!user) {
      alert("Sai tài khoản hoặc mật khẩu");
      return;
    }

    navigate("/dbcl/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* HEADER */}
        <div className="login-header">
          <h1>ĐBCL System</h1>
          <p>Đăng nhập để tiếp tục</p>
        </div>

        {/* FORM */}
        <div className="login-form">

          <input
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" onClick={handleLogin}>
            Sign in
          </button>

        </div>

        {/* FOOTER */}
        <div className="login-footer">
           © 2026 DBCL System
        </div>

      </div>

    </div>
  );
}