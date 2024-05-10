import ReactDOM from "react-dom/client";
import "./index.css";
import Hello from "./Hello/Hello";
const jsxElement = (
  <div>
    <Hello />
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
