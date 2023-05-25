import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Opperations from "./scenes/opperations";
import Plants from "./scenes/plants";
import Plant from "./scenes/plants/plant";
import Login from "./scenes/login/login";
import Signup from "./scenes/signup/signup";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const isSidebarVisible = location.pathname !== "/login"  && location.pathname !== "/sign-up";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {isSidebarVisible && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plants" element={<Plants />} />
              <Route path="/plant?id=" element={<Plant />} />
              <Route path="/plant" element={<Plant />} />
              <Route path="/opperations" element={<Opperations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
