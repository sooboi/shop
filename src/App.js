import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/Authcontext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "./context/Filtercontext";
import { NightContextProvider } from "./context/Nightcontext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FilterContextProvider>
          <NightContextProvider>
            <div className="container">
              <Header />
              <Outlet />
            </div>
          </NightContextProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
