import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider } from "./Context/Usercontext.jsx";
import { BlogProvider } from "./Context/Blogcontext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <ContextProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </ContextProvider>
  </BrowserRouter>
  // </StrictMode>
);
