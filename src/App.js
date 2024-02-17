import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { List } from "./List/List"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Queryfication
        <BrowserRouter>
        <Link to="/list">List</Link>
        <br />

        <Routes>
          <Route path="/list" element={<List />} />
        </Routes>
    </BrowserRouter>
      </header>
      <div>
        <h1>Welcome to Queryfication!</h1>
        <p>
          This site is created for prompt engineers to share your own useful query for chat-gpt or similar platform.
        </p>
        <p>
          You suppose to:
          <ul>
            <li>Share your query with examples.</li>
            <li>Evaluate the query created by someone else.</li>
            <li>Search the queries posted here to use your convenience.</li>
          </ul>
          Get some sophisticated queries and aim to create epoc-making prompts!
        </p>
      </div>
    </div>
  );
}

export default App;
