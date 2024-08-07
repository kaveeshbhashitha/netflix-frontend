import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Video from "./pages/user/Video";
import AddVideo from "./pages/user/AddVideo";
import UpdateVideo from "./pages/user/UpdateVideo";
import Subscriber from "./pages/user/Subscriber";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Trending from "./pages/user/Trending";
import Test from "./pages/user/Test";
import Financial from "./pages/user/Financial";
import PlayList from "./pages/user/PlayList";
import Payment from "./pages/payments/Payment";
import Continue from "./pages/payments/Continue";
import Plans from "./pages/payments/Plans";
import Choose from "./pages/payments/Choose";
import Statistical from "./pages/user/Statistical";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/gallery/:userEmail" element={<PlayList/>}/>
          <Route exact path="/gallery" element={<PlayList/>}/>
          <Route exact path="/video/:userEmail" element={<Video/>}/>
          <Route exact path="/video" element={<Video/>}/>
          <Route exact path="/addvideo" element={<AddVideo/>}/>
          <Route exact path="/addvideo/:id" element={<UpdateVideo/>}/>
          <Route exact path="/subscriber" element={<Subscriber/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/trending" element={<Trending/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="/financial" element={<Financial/>}/>
          <Route exact path="/payment/:id/:email" element={<Payment/>}/>
          <Route exact path="/continue/:email" element={<Continue/>}/>
          <Route exact path="/plans/:email" element={<Plans/>}/>
          <Route exact path="/choose/:id/:email" element={<Choose />} />
          <Route exact path="/statistical" element={<Statistical />} />
        </Routes> 
      </Router>
    </div>
  );
}
//
export default App;
