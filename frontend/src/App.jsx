import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import "./styles/main.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* MAIN ROUTER */}
      <AppRouter />
    </>
  );
}

export default App;