import Login from "../views/login.js";
import { Route, Routes } from "react-router-dom";
import Signup from "../views/Signup.js";
import Home from "../views/home.js";
import Book from "../views/books.js";
import AddBook from "../views/addBook.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/books" element={<Book />} />
        <Route exact path="/addbook" element={<AddBook />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
