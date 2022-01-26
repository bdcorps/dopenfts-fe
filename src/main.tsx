import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Container>
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
