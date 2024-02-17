import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { List } from "./Queries/List/List";
import { Home } from "./Home/Home";
import { NotFound } from "./Shared/NotFound";
import { Create } from "./Queries/Create/Create";

function App() {
  return (
    <div className="App">
      <header className="App-header">Queryfication</header>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/create">Create</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
