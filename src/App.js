import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/books" element={<Books></Books>} />
        <Route path="/add" element={<Add></Add>} />
        <Route path="/update" element={<Update></Update>} />
      </Routes>
    </div>
  );
}

export default App;
