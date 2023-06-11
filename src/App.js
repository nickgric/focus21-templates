import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TrendsPage from "./pages/TrendsPage";
import CasesPage from "./pages/CasesPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="trends" element={<TrendsPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
