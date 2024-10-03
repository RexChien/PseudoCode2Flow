import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider,extendTheme  } from "@chakra-ui/react";
// import './index.css'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange:false
}
const theme = extendTheme({ config })
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
