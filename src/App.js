import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./pages/user/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
        </Routes> 
      </Router>
    </div>
  );
}
//
export default App;
