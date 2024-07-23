import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Profile.css"
import "./Style/Home.css"
import "./Style/Login.css"
import "./Style/EditVlog.css"
import "./Style/ReadVlog.css"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Error from "./Components/Error";
import EditVlog from "./Components/EditVlog";
import ReadVlog from "./Components/ReadVlog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
    
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
          <Route path="/LogIn" element={<Login></Login>}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route path="/Edit" element={<EditVlog></EditVlog>}></Route>
          <Route path="/ReadVlog/:id" element={<ReadVlog></ReadVlog>}></Route>
          {/* <Route path="/ReadVlog" element={<ReadVlog></ReadVlog>}></Route> */}
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
