import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header className="header" />
      <Outlet className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
