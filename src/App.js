import "./App.css";
import HomePage from "./components/HomePage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SigninState from "./context/signin/SigninState";
import CalenderUI from "./components/CalenderUI";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <SigninState>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CalenderUI" element={<CalenderUI />} />
        </Routes>
      </SigninState>
    </Router>
    </>
  );
}

export default App;
