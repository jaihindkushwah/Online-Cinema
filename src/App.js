import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import SideBar from "./scenes/sidebar";
import TopBar from "./scenes/topbar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { colorModeContext, useColorMode } from "./theme";
import HomePage from "./scenes/homePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./scenes/movies/MoviesPage";


function App() {
  
  const [theme,colorMode]=useColorMode();
  return (<Provider store={store}>
    
    <colorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
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
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/tvshows" element={<HomePage/>}/>
                <Route path="/series" element={<HomePage/>}/>
                <Route path="/favorite" element={<HomePage/>}/>
                <Route path="/watchlist" element={<HomePage/>}/>
                <Route path="/settings" element={<HomePage/>}/>
                <Route path="/login" element={<HomePage/>}/>
                <Route path="/logout" element={<HomePage/>}/>
                <Route path="/signup" element={<HomePage/>}/>
                <Route path="/user" element={<HomePage/>}/>
              </Routes>
            </Box>
          </Box>
        </Box>
        </BrowserRouter>
      </ThemeProvider>
    </colorModeContext.Provider>
  </Provider>
  );
}

export default App;
