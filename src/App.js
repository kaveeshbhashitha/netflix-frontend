import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./pages/user/Gallery";
import Video from "./pages/user/Video";
import AddVideo from "./pages/user/AddVideo";
import UpdateVideo from "./pages/user/UpdateVideo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/video" element={<Video/>}/>
          <Route exact path="/addvideo" element={<AddVideo/>}/>
          <Route exact path="/addvideo/:id" element={<UpdateVideo/>}/>
        </Routes> 
      </Router>
    </div>
  );
}
//
export default App;
