import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import SideBar from "./scenes/sidebar";
import TopBar from "./scenes/topbar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { colorModeContext, useColorMode } from "./theme";
import HomePage from "./scenes/homePage/HomePage";


function App() {
  const [theme,colorMode]=useColorMode();
  return (
    <colorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display={"flex"}
          flexDirection={"row"}
          minHeight={"100vh"}
        >
          <Box>
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </Box>
          <Box flex={1}>
            <TopBar />
            <Box>
              <HomePage/>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
