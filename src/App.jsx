import ReactDOM from "react-dom/client";
import Sports from "./Components/Sports";

const App = () => {
  return <Sports />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)