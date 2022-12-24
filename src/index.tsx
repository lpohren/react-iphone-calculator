import React from "react";
import ReactDOM from "react-dom/client";
import * as S from "./index.styled";
import App from "./App";
import ListProvider from "./contexts/CalculatorProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <S.GlobalStyle />
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>
);
