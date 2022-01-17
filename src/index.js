import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Admin } from "./Components/Admin";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./Redux/store";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={Store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
