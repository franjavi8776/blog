import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from "./components/SideBar";
import Project from "./components/Project";

function App() {
  const location = useLocation();
  return (
    <div className="w-full min-h-[100vh] flex bg-primary text-secondary">
      {location.pathname !== "/project" && (
        <div className="w-[50px] md:w-[150px] h-full sticky top-0">
          <Sidebar />
        </div>
      )}

      <div className="flex-grow flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Contact />
              </>
            }
          />

          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
