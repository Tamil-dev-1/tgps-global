import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";   // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS
import "bootstrap-icons/font/bootstrap-icons.css";
import  {BrowserRouter} from 'react-router-dom'
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
   
   <BrowserRouter>

   <ScrollToTop />
 
    <App />
  
  </BrowserRouter>
 
);


