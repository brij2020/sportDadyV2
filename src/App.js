import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Header from "./pages/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
      </Routes>

    </BrowserRouter>
  );
}
