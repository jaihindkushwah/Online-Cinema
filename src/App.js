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
import TvShows from "./scenes/tvshows/TvShows";
import Series from "./scenes/series/Series";
import Watchlist from "./scenes/watchlist/Watchlist";
import MyFavourite from "./scenes/favourite/MyFavourite";
import LoginPage from "./scenes/login/LoginPage";
import Settings from "./scenes/settings/Settings";
import LogoutPage from "./scenes/logout/LogoutPage";


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
          max-width={'100vw'}
        >
          <Box>
            <ProSidebarProvider>
              <SideBar />
            </ProSidebarProvider>
          </Box>
          <Box flex={1} sx={{overflowX:'hidden'}}>
            <TopBar />
            <Box>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/tvshows" element={<TvShows/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path="/favorite" element={<MyFavourite/>}/>
                <Route path="/watchlist" element={<Watchlist/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
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
