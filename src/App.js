import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Profile.css"
import "./Style/Home.css"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
    
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
