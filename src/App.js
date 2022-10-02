import Nav from "./components/Nav";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";

function App() {
  "eba677f5";
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchString" element={<Results />} />
          <Route path=":movieId" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
