import Login from "../views/login.js";
import { Route, Routes } from "react-router-dom";
import Signup from "../views/Signup.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
