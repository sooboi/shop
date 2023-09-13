import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./components/context/Authcontext";

function App() {
  return (
    <AuthContextProvider>
      <div className="container">
        <Header className="header" />
        <Outlet className="main" />
        <Footer className="footer" />
      </div>
    </AuthContextProvider>
  );
}

export default App;
