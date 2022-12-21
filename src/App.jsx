import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NormasContextProvider } from "./contexts/NormasContext";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <NormasContextProvider>
          <Router />
        </NormasContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
