import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import "./styles/main.css";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}