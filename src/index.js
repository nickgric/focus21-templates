import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "modern-normalize/modern-normalize.css";
import "@fontsource-variable/mulish";
import "@fontsource-variable/montserrat";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./styles/chakraTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
