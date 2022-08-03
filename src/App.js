
import './App.css';
import { Cart } from "./Cart";
import { Home } from "./Home";
import { Header } from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Router>
          <Header name={"Wakeel Store"} />
          <Routes>
            <Route exact path="/" element={<Home />}>

            </Route>
            <Route exact path="/cart" element={<Cart />}>

            </Route>
          </Routes>



        </Router>
    </div>
  );
}

export default App;
