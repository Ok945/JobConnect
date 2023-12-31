import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dash" element={<Dashboard />} />

      </Routes>

    </>
  );
}

export default App;
    