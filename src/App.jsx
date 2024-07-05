import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { logoutListener } from "./utils/InMemoryToken";
import Login from "./screens/Login/Login";
import { Home } from "./screens/Home/Home";

function App() {
  useEffect(() => {
    window.addEventListener("storage", logoutListener);

    return () => window.removeEventListener("storage", logoutListener);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
