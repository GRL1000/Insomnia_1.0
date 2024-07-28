import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @font-face {
  font-family: 'CaptureIt';
  src: url('./src/assets/fonts/Captureit.woff') format('woff');
}

  body {
    background: radial-gradient(circle at center, #2F91D4, #2072C1, #1A60B3, #164EA1, #0F3C8E, #041F58);
    color: white;
    font-family: 'CaptureIt', Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border: none;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
