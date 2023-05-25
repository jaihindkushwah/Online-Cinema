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
import SignUpPage from "./scenes/signup/signUpPage";
import Footer from "./scenes/footer/Footer";
import FaqPage from "./faq/FaqPage";
import MovieInfoPage from "./scenes/movies/MovieInfoPage";
import TvInfoPage from "./scenes/tvshows/TvInfoPage";
import ResetPasswordPage from "./scenes/resetPassword/resetPassword";

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
                <Route path="/movies" element={<MoviesPage/>}>
                </Route>
                <Route path="/tvshows" element={<TvShows/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path="/favorite" element={<MyFavourite/>}/>
                <Route path="/watchlist" element={<Watchlist/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
                <Route path="/resetpassword" element={<ResetPasswordPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/user" element={<HomePage/>}></Route>
                <Route path="/faq" element={<FaqPage/>}/>
                
                <Route path="/movie/:id" element={<MovieInfoPage/>} />
                <Route path="/tv/:id" element={<TvInfoPage/>} />
              </Routes>
            </Box>
          </Box>
          
        </Box>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </colorModeContext.Provider>
  </Provider>
  );
}

export default App;
