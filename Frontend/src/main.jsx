import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import PdfDownloder from "./pages/PdfDownloder.jsx";
import AboutPage from "./pages/About.jsx";
import InputPage from "./pages/InputPage.jsx";
import LoadingSpinner from "./components/Loading.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/input" element={<InputPage />} />
      <Route path="/pdf" element={<PdfDownloder />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/loading" element={<LoadingSpinner />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
