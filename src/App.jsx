import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./contexts/AuthContext";
import { NormasContextProvider } from "./contexts/NormasContext";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <NormasContextProvider>
            <Router />
          </NormasContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
