import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const fakeUsers = [
  { username: "admin", password: "123", role: "admin" },
  { username: "qa", password: "123", role: "qa" },
  { username: "manager", password: "123", role: "manager" },
  { username: "faculty", password: "123", role: "faculty" },
  { username: "leader", password: "123", role: "leader" },
];

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const login = (username, password) => {

    const found = fakeUsers.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (!found) return false;

    setUser({
      username: found.username,
      role: found.role,
    });

    return found;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}