import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./components/context/Authcontext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="container">
          <Header className="header" />
          <Outlet className="main" />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
