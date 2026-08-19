import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <div className="gsd-scanlines" aria-hidden="true" />
      <div className="gsd-vignette" aria-hidden="true" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;