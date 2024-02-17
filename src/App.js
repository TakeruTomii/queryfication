import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { List } from "./List/List";
import {Home} from "./Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Queryfication

      </header>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
