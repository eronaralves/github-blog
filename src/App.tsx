import { ThemeProvider } from 'styled-components'

// Router
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

// Theme
import { defaultTheme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes/>  
      </BrowserRouter>
    </ThemeProvider>
  )
}
