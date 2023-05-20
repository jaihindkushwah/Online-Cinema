import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) =>(
  mode === "dark" ? { 
    primary: {
    100: "#efedf8",
    200: "#cfc9e9",
    300: "#afa4da",
    400: "#8f80cb",
    500: "#6f5cbc",
    600: "#5643a3",
    700: "#43347f",
    800: "#30255b",
    900: "#241c45"},
    secondary:{
      100: "#d9dcf0",
      200: "#b2b9e1",
      300: "#8c97d3",
      400: "#6574c4",
      500: "#3f51b5",
      600: "#324191",
      700: "#26316d",
      800: "#192048",
      900: "#0d1024"
    }
} : 
{ 
    primary: {
        900: "#efedf8",
        800: "#cfc9e9",
        700: "#afa4da",
        600: "#8f80cb",
        500: "#6f5cbc",
        400: "#5643a3",
        300: "#43347f",
        200: "#30255b",
        100: "#241c45"},
    secondary:{
          900: "#d9dcf0",
          800: "#b2b9e1",
          700: "#8c97d3",
          600: "#6574c4",
          500: "#3f51b5",
          400: "#324191",
          300: "#26316d",
          200: "#192048",
          100: "#0d1024"
        }
 }
);


  


// createTheme(
//     {
//     palette: {
//         mode: 'dark',
//         primary:{
//             main:'black',
//         },
//         background:{
            
            
//         }
//       //   secondary: {},
//       },
//       typography: {
//         fontSize: 12,
//         h1: { fontSize: 34 },
//       },
//     }
// )


export const themeSettings = (mode) =>{
    const color=tokens(mode);
    return(
        mode==='dark'?
    {
        palette: {
          mode: mode,
          primary:{
            main:color.primary[800],
            light:color.primary[800],
            dark:color.primary[300]
          },
          secondary: {
            main:color.secondary[500],
            light:color.secondary[500],
            dark:color.secondary[500]
          },
          background:{
            default:color.primary[800]
          }
        },
        typography: {
          fontSize: 12,
          h1: { fontSize: 36 },
          h2: { fontSize: 30 },
          h3: { fontSize: 24 },
          h4: { fontSize: 18 },
          h5: { fontSize: 14 },
          h6: { fontSize: 12 },
        },
      }
    :
    {
        palette: {
          mode: mode,
          primary: {
            main:color.primary[800],
            light:color.primary[800],
            dark:color.primary[300]
          },
          secondary: {
            main:color.secondary[500],
            light:color.secondary[500],
            dark:color.secondary[500]
          },
          background:{
            default:color.primary[900]
          }
          
        },
        typography: {
          fontSize: 12,
          h1: { fontSize: 36 },
          h2: { fontSize: 30 },
          h3: { fontSize: 24 },
          h4: { fontSize: 18 },
          h5: { fontSize: 14 },
          h6: { fontSize: 12 },
        },
      }
    )
}

export const colorModeContext=createContext({
    toggleColorMode:()=>{}
})

export const useColorMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
