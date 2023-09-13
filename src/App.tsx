import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
