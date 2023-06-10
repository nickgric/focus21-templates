import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Cases from "./pages/Cases";
import Careers from "./pages/Careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trends" element={<Trends />} />
        <Route path="cases" element={<Cases />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}

export default App;
