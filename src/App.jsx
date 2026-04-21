import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/#home" replace />} />
        <Route
          path="/services"
          element={<Navigate to="/#services" replace />}
        />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/Temoignages"
          element={<Navigate to="/#Temoignages" replace />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
