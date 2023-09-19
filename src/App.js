import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/Authcontext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "./context/Filtercontext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FilterContextProvider>
          <div className="container">
            <Header className="header" />
            <Outlet className="main" />
          </div>
        </FilterContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
