import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 650,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  once: true,
  offset: 30,
  anchorPlacement: "top-bottom",
});

createRoot(document.getElementById("root")).render(<App />);


