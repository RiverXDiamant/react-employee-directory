// router and components
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header.js";
import Nav from "../components/Navigation/Nav";
import HomePage from "../pages/HomePage";
import EmployeeDirectoryPage from "../pages/EmployeeDirectoryPage";
import EmployeePage from "../pages/EmployeePage";
import Footer from "../components/Footer/Footer.js";

// css
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directory" element={<EmployeeDirectoryPage />} />
        <Route path="/employeepage/:directory" element={<EmployeePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
