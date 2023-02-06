import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/app/App";
import { BrowserRouter as Router } from "react-router-dom";

// `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
