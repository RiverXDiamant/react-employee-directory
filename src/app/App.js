// router and components
import { Route, Routes } from "react-router-dom";
import Nav from "../components/Navigation/Nav";
import HomePage from "../pages/HomePage";
import EmployeeDirectoryPage from "../pages/EmployeeDirectoryPage";

// css
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directory" element={<EmployeeDirectoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
