import RoutesApp from "./routes";
import "./App.css"
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <div className="appContainer">
        <RoutesApp/>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App;
